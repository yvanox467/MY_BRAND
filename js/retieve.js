// javascript for index.html
const container = document.querySelector('.container');

const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts';
  /*  if (term) {
        uri += `&q=${term}`;
    }*/
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    posts.forEach(post => {
        template += `
        <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.author}</td>
        <td><i class="fa-solid fa-file-pen edit-icon" data-id="${post.id}"></i></td>
        <td><i class="fa-sharp fa-solid fa-trash "data-id="${post.id}"></i></td>
    </tr>
        `
    })
    container.innerHTML = template;
   document.querySelectorAll('.fa-sharp,fa-solid,fa-trash').forEach(icon => {
        icon.addEventListener('click', async event => {
          event.preventDefault();
          const postId = event.target.dataset.id;
    
          try {
            const response = await fetch(`http://localhost:3000/posts/${postId}`, {
              method: 'DELETE'
            });
            if (response.ok) {
              // Remove the post from the UI
              const postElem = event.target.closest('.posts');
              postElem.parentNode.removeChild(postElem);
            } else {
                throw new Error('Failed to delete post');
              }
            } catch (error) {
              console.error(error);
              // Display an error message
            }
          });
        });
        document.querySelectorAll('.edit-icon').forEach(icon => {
          icon.addEventListener('click', async event => {
            event.preventDefault();
            const postId = event.target.dataset.id;
            const response = await fetch(`http://localhost:3000/posts/${postId}`);
            const post = await response.json();
            const title = prompt('Enter the new title', post.title);
            const body = prompt('Enter the new body', post.body);
            const doc = {
              title: title,
              body: body
            };
            await fetch(`http://localhost:3000/posts/${postId}`, {
              method: 'PATCH',
              body: JSON.stringify(doc),
              headers: { 'Content-Type': 'application/json' }
            });
            renderPosts();
          });
        });
      }


/*searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})*/
window.addEventListener('DOMContentLoaded', () => renderPosts());
