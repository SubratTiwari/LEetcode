var menuIcon =document.querySelector(".menu-icon");
var sidebar =document.querySelector(".sidebar");
var container =document.querySelector(".container");

menuIcon.onclick =function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")

}


//search bar 

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchlink = "https://www.youtube.com/results?search_query=";


