async function getUsersData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);
      console.log(data[i].name);
      console.log(data[i].email);
      console.log(data[i].address.city);
      console.log("-----------------------");
    }
  } catch (error) {
      console.log(error)
  }
}

getUsersData();