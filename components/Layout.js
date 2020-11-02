import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta charSet="utf-8" />
				<link rel="shortcut icon" type="image/ico" href="favicon.ico" />
			</Head>
			<Header />
			{children}
			<style jsx global>{`
				body {
					padding: 0 1rem 1rem 1rem;
					margin: 0 auto;
					background: #141417;
					color: #fff;
					font-family: -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
						Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
						Helvetica, Arial, sans-serif, "Apple Color Emoji",
						"Segoe UI Emoji", "Segoe UI Symbol";
					height: 100vh;
					width: 960px;
				}
				header {
					background: #1e2023;
					padding: 0px 20px;
					border-radius: 10px;
				}
				nav {
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-grow: 1;
					flex-basis: 0;
				}
				button {
					background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
					border-radius: 3px;
					color: "white";
					padding: 10px 30px;
					border: none;
					outline: none;
					color: white;
					text-transform: uppercase;
					font-weight: 700;
					transition: 300ms all ease;
				}
				button:hover {
					box-shadow: 0px 3px 5px 2px rgba(255, 105, 135, 0.3);
					cursor: pointer;
				}
			`}</style>
		</>
	);
};

export default Layout;
