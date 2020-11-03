import Layout from "../components/Layout";
import WithAuth from "../components/WithAuth";

const protectedcsr = () => {
	return (
		<Layout title="Protected Page">
			<div>
				<h2>Client Side Rendering</h2>
				<p>
					This page uses the <b>useSession()</b> React Hook in the
					<b>{" </WithAuth> "}</b>
					component.
				</p>
				<p>
					The <b>useSession()</b> React Hook easy to use and allows pages
					to render very quickly.
				</p>
				<p>
					The advantage of this approach is that session state is shared
					between pages by using the <b>Provider</b> in _app.js so that
					navigation between pages using <b>useSession()</b> is very fast.
				</p>
				<p>
					The disadvantage of <b>useSession()</b> is that it requires
					client side JavaScript.
				</p>
			</div>
		</Layout>
	);
};

export default WithAuth(protectedcsr);
