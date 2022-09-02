function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUi(data));
}

function displayUi(data) {
    console.log(data)
}