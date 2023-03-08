/*const form = document.getElementById('form')
const createPost = async (e) => {
  e.preventDefault();
  const name = document.getElementById('001').value;
  const email = document.getElementById('002').value;
  const contact = document.getElementById('003').value;
  const comment = document.getElementById('004').value;
  const doc = {
    name: name,
    email: email,
    contact: contact,
    comment: comment,
  };
  await fetch('http://localhost:3000/comments', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });
};
form.addEventListener('submit', createPost);*/
const form = document.getElementById('form')
const createComment = async (e) => {
  e.preventDefault();
  const doc = {
      name: form.name.value,
      email: form.email.value,
      contact: form.contact.value,
      body: form.comment.value,
  }
  await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: { 'Content-Type': 'application/json' }
  });
  window.location.replace('/index.html');
}
form.addEventListener('submit', createComment);