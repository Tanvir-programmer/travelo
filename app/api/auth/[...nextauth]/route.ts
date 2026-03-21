import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userLists = [
  { name: "hablu", password: "12345" },
  { name: "bablu", password: "54321" },
  { name: "dablu", password: "56789" },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter Your Name",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
        secretCode: {
          label: "Secret Code",
          type: "password",
          placeholder: "Enter Code",
        },
      },

      async authorize(credentials) {
        // Example login logic
        const { username, password, secretCode } = credentials;
        const user = userLists.find((u) => u.name === username);
        if (!user) return null;
        const isPasswordOk = user.password == password;
        if (!isPasswordOk) return null;

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
