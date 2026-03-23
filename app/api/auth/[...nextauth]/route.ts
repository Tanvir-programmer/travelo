import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userLists = [
  { username: "hablu", password: "12345" },
  { username: "bablu", password: "54321" },
  { username: "dablu", password: "56789" },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const user = userLists.find((u) => u.username === credentials.username);

        if (!user || user.password !== credentials.password) {
          return null;
        }

        // 👇 must return user with name field
        return {
          id: user.username,
          name: user.username,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      // session.user.name already comes from `name`
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
