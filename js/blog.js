// blog.js
document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');
    const toggleSwitch = document.getElementById('toggle');

    // Function to render blog posts
    function renderPosts() {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        blogList.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p>Author: ${post.username}</p>
            `;
            blogList.appendChild(postElement);
        });
    }

    // Initial rendering of posts
    renderPosts();

    // Dark mode toggle
    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
});

