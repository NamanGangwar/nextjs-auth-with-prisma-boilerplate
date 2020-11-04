// This is an example of how to access a session from an API route
import { getSession } from "next-auth/client";

export default async (req, res) => {
	const session = await getSession({ req });
	if (session) {
		res.json(session);
	} else {
		res.status(401);
	}
};
