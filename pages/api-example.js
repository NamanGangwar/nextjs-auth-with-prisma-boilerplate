import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const apiExample = () => {
	const [data, setData] = useState(null);

	useEffect(async () => {
		const response = await fetch("/api/session", {
			method: "post",
			credentials: "include",
		});
		try {
			const res = await response.json();
			setData(JSON.stringify(res, null, 2));
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<Layout title="API Example">
			<h2>API Example</h2>
			<p>
				The examples below show responses from the example API endpoints.
				You must be signed in to see responses.
			</p>
			<pre>{data && data}</pre>
		</Layout>
	);
};

export default apiExample;
