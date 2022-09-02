function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(postsData) {
    const postContainer = document.getElementById('post-container');
    for(const post of postsData){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User: ${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Descrpition: ${post.body}</p>
        `;
        console.log(postDiv)
        postContainer.appendChild(postDiv);
    }
}
loadPost()