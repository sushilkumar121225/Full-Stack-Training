const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  // Send request to the server
  fetch("https://jsonplaceholder.typicode.com/users")
    // Convert response into JSON
    .then((response) => {
      return response.json();
    })

    // users is an array of objects
    .then((users) => {
      let result = "";

      // Loop through every user
      users.forEach((user) => {
        // Create HTML dynamically
        result += `<h3>${user.name}</h3>`;
      });

      // Display all names on the webpage
      output.innerHTML = result;
    });
});