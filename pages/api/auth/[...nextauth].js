import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options = {
	providers: [
		Providers.Credentials({
			authorize: async (credentials) => {
				// Add logic here to look up the user from the credentials supplied
				const defaultUser = {
					id: 1,
					name: "John Doe",
					email: "johndoe@example.com",
					password: "testpassword",
				};
				if (
					defaultUser.email === credentials.email &&
					defaultUser.password === credentials.password
				) {
					// Any object returned will be saved in `user` property of the JWT
					return Promise.resolve(defaultUser);
				} else {
					// If you return null or false then the credentials will be rejected
					return Promise.resolve(null);
					// You can also Reject this callback with an Error or with a URL:
					// return Promise.reject(new Error('error message')) // Redirect to error page
					// return Promise.reject('/path/to/redirect')        // Redirect to a URL
				}
			},
		}),
	],
	debug: process.env.NODE_ENV === "development",
	secret: process.env.AUTH_SECRET,
	session: {
		jwt: true,
	},
	jwt: {
		signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
	},
	adapter: Adapters.Prisma.Adapter({ prisma }),
};

export default (req, res) => NextAuth(req, res, options);
