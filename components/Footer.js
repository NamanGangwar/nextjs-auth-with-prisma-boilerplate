import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/protected">
						<a>Protected</a>
					</Link>
				</li>
				<li>
					<Link href="/protected-ssr">
						<a>Protected SSR</a>
					</Link>
				</li>
				<li>
					<Link href="/api-example">
						<a>API</a>
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
