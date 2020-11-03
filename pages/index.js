import Layout from "../components/Layout";
import { signIn, useSession, getSession } from "next-auth/client";
import { useState } from "react";

const Home = () => {
	const [session, loading] = useSession();
	const [email, setEmail] = useState("johndoe@example.com");
	const [password, setPassword] = useState("testpassword");

	return (
		<Layout title="Next BoilerPlate">
			<div className="login">
				<div className="form">
					<div>
						<label>Email:</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							readOnly
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							readOnly
						/>
					</div>
					<button
						onClick={(e) => {
							e.preventDefault();
							signIn("credentials", { email, password });
						}}
					>
						Login
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default Home;

export async function getServerSideProps(context) {
	const session = await getSession(context);
	if (session) {
		return {
			redirect: {
				permanent: false,
				destination: "/protected",
			},
		};
	}
	return {
		props: {
			session,
		},
	};
}
