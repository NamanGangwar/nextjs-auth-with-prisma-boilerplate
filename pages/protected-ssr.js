import Layout from "../components/Layout";
import { getSession } from "next-auth/client";

const protectedssr = () => {
	return (
		<Layout title="Protected Page">
			<div>
				<h2>Server Side Rendering</h2>
				<p>
					This page uses the universal <b>getSession()</b> method in
					<b> getServerSideProps()</b>.
				</p>
				<p>
					Using <b>getSession()</b> in <b>getServerSideProps()</b> is the
					recommended approach if you need to support Server Side Rendering
					with authentication.
				</p>
				<p>
					The advantage of Server Side Rendering is this page does not
					require client side JavaScript.
				</p>
				<p>
					The disadvantage of Server Side Rendering is that this page is
					slower to render.
				</p>
			</div>
		</Layout>
	);
};

export default protectedssr;

export async function getServerSideProps(context) {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}
	return {
		props: {
			session,
		},
	};
}
