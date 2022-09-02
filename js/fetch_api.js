fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => json.title);

// const displayData = document.getElementById('data');
// const dataInUi = displayData.innerHTML = data;