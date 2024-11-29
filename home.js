$(document).ready(() =>{
    if(JSON.parse(localStorage.getItem("logged_User")) != null)
    {
        window.location.href ="h1.html";
    } else{
        window.location.href ="index.html";
    }
})