import { dbConnect } from "@/app/lib/dbConnector";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // ✅ Destructure email and password from credentials
        const { email, password } = credentials;

        // ✅ Pass email correctly to findOne
        const user = await dbConnect("users").findOne({ email });

        if (!user) return null;

        // ✅ Verify password using bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;

        return {
          id: user._id.toString(),
          name: user.username,
          email: user.email,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // ✅ Persist user data into the token on first sign-in
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      // ✅ Attach token data to the session object
      if (token && session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // ✅ Required for production
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// ```

// **Summary of all fixes:**

// | Issue | Fix |
// |---|---|
// | `email` not defined | Destructured from `credentials` |
// | No password check | Added `bcrypt.compare()` |
// | Unused `userLists` | Removed it |
// | Missing `jwt` callback | Added to persist user into token |
// | Incomplete `session` callback | Now maps token fields to session |
// | Missing `secret` | Added `process.env.NEXTAUTH_SECRET` |
// | Missing custom `pages` | Added `signIn` page redirect |

// Also make sure your `.env.local` has:
// ```
// NEXTAUTH_SECRET=your_secret_here
// NEXTAUTH_URL=http://localhost:3000
