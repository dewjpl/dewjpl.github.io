import React, { useState, useEffect } from "react";

function App() {
	const [inputText, setInputText] = useState("");
	const [dataFromApi, setDataFromApi] = useState([]);

	const handleInputChange = (event) => {
		setInputText(event.target.value);
	};

	const sendDataToApi = () => {
		fetch("https://652e45d00b8d8ddac0b115eb.mockapi.io/sciagi/v1/sciagtxt", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: inputText }),
		})
			.then((response) => response.json())
			.then(() => {
				fetchDataFromApi();
				setInputText("");
			})
			.catch((error) => console.error("Error sending data:", error));
	};

	const deleteDataFromApi = (id) => {
		fetch(
			`https://652e45d00b8d8ddac0b115eb.mockapi.io/sciagi/v1/sciagtxt/${id}`,
			{
				method: "DELETE",
			}
		)
			.then(() => {
				fetchDataFromApi();
			})
			.catch((error) => console.error("Error deleting data:", error));
	};

	const fetchDataFromApi = () => {
		fetch("https://652e45d00b8d8ddac0b115eb.mockapi.io/sciagi/v1/sciagtxt")
			.then((response) => response.json())
			.then((data) => setDataFromApi(data))
			.catch((error) => console.error("Error fetching data:", error));
	};

	useEffect(() => {
		fetchDataFromApi();
	}, []);

	return (
		<div>
			<h1>Enter Text and Save to Database</h1>
			<input
				type="text"
				value={inputText}
				onChange={handleInputChange}
				placeholder="Enter text"
			/>
			<button onClick={sendDataToApi}>Save Text</button>
			<h2>Data from API:</h2>
			<ul>
				{Array.isArray(dataFromApi) &&
					dataFromApi.map((item) => (
						<li key={item.id}>
							{item.text}
							<button onClick={() => deleteDataFromApi(item.id)}>Delete</button>
						</li>
					))}
			</ul>
		</div>
	);
}

export default App;
