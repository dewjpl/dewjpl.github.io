import React, { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// API endpoint URL
		const apiUrl =
			"https://652e45d00b8d8ddac0b115eb.mockapi.io/sciagi/v1/:endpoint";

		// Fetch data from the MockAPI endpoint
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []); // Empty dependency array ensures useEffect runs once after initial render

	return (
		<div>
			<h1>Data from MockAPI</h1>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
