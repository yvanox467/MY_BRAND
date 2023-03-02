const form = document.querySelector('.low');
const createPost = async (e) => {
  e.preventDefault();
  const doc = {
    name: form.name.value,
    email:form.email.value,
    contact:form.contact.value,
    comments:form.comment.value,
  };
  await fetch('http://localhost:3000/comments', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });
};
form.addEventListener('submit', createPost);
const container = document.querySelector('container');
const renderPosts = async () => {
  let uri = 'http://localhost:3000/comments';
  const res = await fetch(uri);
  const wrapper = await res.json();
  let template = ``;
  wrapper.forEach((posts) => {
    template += `
      <div class="rap">
      <label for="">Names:</label><br>
      <label for="">Email:</label><br>
      <label for="">Contact:</label><br>
      <label for="">Comment:</label>
      <p>lorem ipsum</p>
      </div>
    `;
  });
  container.innerHTML = template;
};
window.addEventListener('DOMContentLoaded', () => renderPosts());






