// Function to fetch data from the mock API endpoint
function fetchData() {
	// API endpoint URL
	const apiUrl =
		"https://652e45d00b8d8ddac0b115eb.mockapi.io/sciagi/v1/:endpoint";

	// Using the Fetch API to make a GET request
	fetch(apiUrl)
		.then((response) => {
			// Check if the request was successful (status code 200)
			if (response.ok) {
				// Parse the JSON response
				return response.json();
			}
			// If there was an error with the request, throw an error
			throw new Error("Network response was not ok.");
		})
		.then((data) => {
			// Handle the JSON data
			console.log(data); // Do something with the data, such as displaying it on your website
		})
		.catch((error) => {
			// Handle errors that occurred during the fetch operation
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		});
}

// Call the fetchData function to initiate the data fetching process
fetchData();
