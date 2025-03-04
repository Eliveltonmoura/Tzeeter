"use strict";
const tizeetar = document.getElementById('form-tizeetar');
const posttizeetar = document.getElementById('tizeetar');
const postContainer = document.getElementById('post');
tizeetar.addEventListener('submit', (e) => {
    e.preventDefault();
    creatPost(posttizeetar.value);
    const texto = posttizeetar.value;
    console.log(texto);
});
function creatPost(texto) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
    <div class="p-3" >
    <p><strong>Elivelton Moura </strong> @eliveltonmoura · Jun 1, 2011</p>
        <p>${texto}</p>
    <div>
    <div>
         <span class="react-chat"> <i class="bi bi-chat"></i>100</span>
        <span class="react-repeat"> <i class="bi-arrow-repeat"></i>100</span>
        <span class="react-heart"> <i class="bi bi-heart"></i>100 </span>
        <span class="react-upload"> <i class="bi bi-upload"></i></span>
        </div>
    <hr>   
    `;
    postContainer.appendChild(post);
    tizeetar.reset();
}
