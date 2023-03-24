// javascript for details.html
const container = document.querySelector(".container");
const renderDetails = async () => {
    const uri = "http://localhost:3000/comments";
    const res = await fetch(uri);
    const post = await res.json();
    let template = ``;
    post.forEach(data => {
        template += `<div class="rap">
        <label for="">Names: ${data.name}</label><br>
        <label for="">Comment: ${data.comment}</label>
    </div>`;
    });
    container.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderDetails())
