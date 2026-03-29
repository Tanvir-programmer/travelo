import "server-only"; // ✅ add this — prevents client bundle inclusion
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/app/lib/dbConnector";
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const usersCollection = dbConnect("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );

        if (!isValid) return null;

        // ✅ All values are plain strings — safe to pass to client
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.photoURL,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name    = user.name;
        token.picture = user.image;
        token.role    = (user as any).role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.name  = token.name    as string;
        session.user.image = token.picture as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },

  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});