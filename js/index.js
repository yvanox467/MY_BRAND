// javascript for index.html
const container = document.querySelector('.container');
const searchForm = document.querySelector('.search');

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
            <div class="bol">

            <img src="Data:image/png;base64,${post.image}"> 
            <label>${post.title}</label>
            
            <button><a href="blogex.html">READ MORE</a> </button>
        
            </div>
        `
    })
    container.innerHTML = template;
}
/*searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})*/
window.addEventListener('DOMContentLoaded', () => renderPosts());