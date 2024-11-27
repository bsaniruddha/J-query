$(document).ready(() =>{
    if(JSON.parse(localStorage.getItem("logged_User")) != null)
    {
        window.location.href ="home.html";
    } else{
        window.location.href ="index.html";
    }
})