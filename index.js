let content = document.querySelector('.content');
let over = document.querySelector('.overlay');

function openModal(){
    content.classList.add("action");
    over.classList.add("action-overlay");
}

function closeModal(){
    content.classList.remove("action");
    over.classList.remove("action-overlay");
}