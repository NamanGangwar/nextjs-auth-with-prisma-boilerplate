import { signOut, useSession } from "next-auth/client";

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
	const [session, loading] = useSession();
	return (
		<header>
			<nav>
				<h3>Next BoilerPlate</h3>
				{!session && (
					<>
						<p>You are not signed in!</p>
					</>
				)}
				{session && (
					<>
						<p>Signed in as {session.user.email}</p>
						<button
							onClick={(e) => {
								e.preventDefault();
								signOut();
							}}
						>
							Logout
						</button>
					</>
				)}
			</nav>
		</header>
	);
}
