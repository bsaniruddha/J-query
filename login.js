let body = $('body');
body.css({
    // "background-color": "black"
    "width": "100%",
    "height": "100%"
})

let section = $('<section>');
section.css({
    "width": "100%",
    "height": "600px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
}).appendTo(body);
// console.log(section);

let from = $('<form>');
from.css({
    "width": "400px",
    "height": "300px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
    "gap": "2rem",
    "border": "3px solid black",
    "box-shadow": "1px 1px 10px grey"
}).appendTo(section);

let heading = $('<div>');
heading.css({
    "font-size": "2rem",
    "border": "2px solid black",
    "padding": "1rem",
    "width": "500px",
    "height": "30px",
    "color": "red"
}).css("display","none").text(" ").appendTo(body);

let heading1 = $('<div>');
heading1.css({
    "font-size": "2rem",
    "border": "2px solid black",
    "padding": "1rem",
    "width": "500px",
    "height": "30px",
    "color": "red"
}).css("display","none").text(" ").appendTo(body);

let input = $('<input/>');
input.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder","Username").appendTo(from);

let input1 = $('<input/>');
input1.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder","Password").appendTo(from);

let button = $('<button>');
button.css({
    "height": "30px",
    "width": "100px"
}).text("Submit").appendTo(from)

button.on('click',(e)=>{
    e.preventDefault();

    const user ={
        usernamevalue : input.val(),
        passwordvalue : input1.val()
    }
    if(!input.val() || !input1.val())
    {
        heading.css("display", "block");
        heading.text("Please Enter username & Password");
        return;
    }
    const existinguser = JSON.parse(localStorage.getItem("user")) || [];
    const varify = existinguser.find((abc) =>{
         return abc.emailvalue === user.usernamevalue;

    })
    localStorage.setItem("logged_User", JSON.stringify(varify));
    // console.log(varify);
        if(varify){

            // alert("Login Successfully");
            heading1.css("display", "block");
            heading1.text("Login Successfully");
            setTimeout(() => {
                window.location.href = "h1.html";
            }, 5000);
        } else {
            // alert("Register");
            heading1.css("display", "block");
            heading1.text("Register First");
            setTimeout(() => {
                window.location.href = "register.html";
            }, 5000);
        }
})
