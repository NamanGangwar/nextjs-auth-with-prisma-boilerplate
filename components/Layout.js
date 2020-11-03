import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

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
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
					crossOrigin="anonymous"
				/>
			</Head>
			<Header />
			{children}
			<Footer />
			<style jsx global>{`
				* {
					text-decoration: none;
					list-style-type: none;
					box-sizing: border-box;
				}
				body {
					padding: 0 1rem 1rem 1rem;
					margin: 10px auto !important;
					background: #141417;
					color: #fff;
					font-family: -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
						Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
						Helvetica, Arial, sans-serif, "Apple Color Emoji",
						"Segoe UI Emoji", "Segoe UI Symbol";
					max-width: 960px;
				}
				header,
				footer {
					background: #1e2023;
					padding: 0px 20px;
					border-radius: 10px;
					margin: 10px 0px;
				}

				nav,
				footer ul {
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-grow: 1;
					flex-basis: 0;
					padding: 10px 0px;
				}
				footer ul {
					justify-content: center;
				}
				footer ul li {
					margin: 10px 0px;
				}
				footer ul li a {
					display: inline;
					padding: 10px 15px;
					margin: 0px 10px;
					border-radius: 5px;
					background: #141417;
					transition: 300ms all ease;
					color: #bec1c5;
				}
				footer ul li a:hover {
					cursor: pointer;
					color: white;
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
				.login {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
				}
				.login button {
					width: 100%;
					margin: 10px 0px;
				}
				.form div {
					padding: 10px 0px;
					width: 100%;
				}
				.login input {
					margin-top: 5px;
					width: inherit;
					color: white;
					padding: 10px;
					border: 1px solid #1e2023;
					border-radius: 5px;
					background: transparent;
					transition: 300ms all ease;
				}
				.login input:focus {
					background: #1e2023;
					border: 1px solid #141417;
					outline: none;
				}
				h2 {
					text-align: center;
				}
			`}</style>
		</>
	);
};

export default Layout;
