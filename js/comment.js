const form = document.getElementById('comment-form');
const createPost = async (e) => {
  e.preventDefault();
  const doc = {
    name: form.name.value,
    comment: form.comment.value,
  };
  await fetch('http://localhost:3000/comments', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });
};
form.addEventListener('submit', createPost);







