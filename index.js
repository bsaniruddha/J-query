$(document).ready(() =>{
    if(JSON.parse(localStorage.getItem("logged_User")) != null)
    {
        console.log(JSON.parse(localStorage.getItem("logged_User")));
        window.location.href ="h1.html";
    } 
})