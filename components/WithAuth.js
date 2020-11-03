import { useEffect } from "react";
import { useSession } from "next-auth/client";
import Router from "next/router";

const WithAuth = (WrappedComponent) => {
	const RequiresAuthentication = (props) => {
		// get session from next-auth
		const [session, loading] = useSession();

		useEffect(() => {
			// if a there isn't a logged in user
			// then redirect them to "/signin"
			if (!loading && !session) Router.push("/");
		}, [session, loading]);

		// if there's a loggedInUser, show the wrapped page, otherwise show a loading indicator
		return session ? <WrappedComponent {...props} /> : null;
	};

	return RequiresAuthentication;
};

export default WithAuth;
