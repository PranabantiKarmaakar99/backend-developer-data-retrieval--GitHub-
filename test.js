async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data.title;
  }
  
  fetchData()
    .then(title => console.log(title))
    .catch(error => console.log(error));