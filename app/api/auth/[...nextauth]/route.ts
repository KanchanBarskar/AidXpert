import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { LoginResponse } from "@/models/LoginResponse";

interface Credentials {
  email?: string;
  phoneNo?: string;
  password: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        phoneNo: { label: "Phone Number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) return null;
        try {
          let url = "";
          let body: Record<string, string> = {};

          if (credentials.phoneNo) {
            // Phone login
            url = "https://aidxpert-backend-api-uat.onrender.com/api/user/login/phone";
            body = {
              phoneNo: credentials.phoneNo,
              password: credentials.password,
            };
          } else if (credentials.email) {
            // Email login
            url = "https://aidxpert-backend-api-uat.onrender.com/api/user/login/email";
            body = {
              email: credentials.email,
              password: credentials.password,
            };
          } else {
            return null;
          }

          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });

           const loginResponse: LoginResponse = await res.json();

          console.log("Login response:", loginResponse);

        if (res.ok && loginResponse.status && loginResponse.user) {
          // Attach token and user to the session, ensure 'id' is present as string
          return {
            ...loginResponse.user,
            token: loginResponse.token,
            id: String(loginResponse.user.user_id ?? loginResponse.user.user_id ?? ""), // Ensure 'id' is present
          };
        }
          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
   async jwt({ token, user }) {
      if (user) {
        // Copy all user fields and token to JWT
        Object.assign(token, user);
      }
      return token;
    },
    async session({ session, token }) {
      // Copy all token fields to session.user
      session.user = { ...token };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };