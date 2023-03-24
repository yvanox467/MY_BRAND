const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector(".graph");
const wrapper = document.querySelector('.preview');
const renderDetails = async () => {
    const res = await fetch(`https://my-brand-backend-c5gy.onrender.com/blogs/blogs` + id );
    const posts = await res.json();
    const template = `
    <img src="data:image/png;base64,${posts.image}">
    <p>${posts.body}</p>
    
   
    `
    container.innerHTML = template;
    console.log(container)
}
const renderDetail = async () => {
  const createPost = await fetch('http://localhost:3000/comments');
  const result = await createPost.json();
let templat = '';
result.forEach(post => {
  templat += `
  <div class="comm">
  <h3>${post.name}</h3>
  <p>${post.comment}</p>
  </div>
  `
});
  wrapper.innerHTML = templat;
}
window.addEventListener('DOMContentLoaded', () => {
  renderDetails();
  renderDetail();
});