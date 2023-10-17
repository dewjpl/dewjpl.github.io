fetch("https://PROJECT_TOKEN.mockapi.io/users/1/tasks", {
	method: "GET",
	headers: { "content-type": "application/json" },
})
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
		// handle error
	})
	.then((tasks) => {
		// Do something with the list of tasks
	})
	.catch((error) => {
		// handle error
	});
