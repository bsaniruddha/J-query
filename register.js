let body = $('body');
body.css({
    // "background-color": "black"
})

let section = $('<section>');
section.css({
    // "border": "3px solid black",
    "width": "100%",
    "height": "700px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
}).appendTo(body)

let form = $('<form>');
form.css({
    "border": "3px solid black",
    "width": "500px",
    "height": "500px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
    "gap": "2rem",
    "box-shadow": "1px 1px 10px grey"
}).attr("id","myform").appendTo(section);

let firstname = $('<input/>');
firstname.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder", "First Name").appendTo(form);

let lastname = $('<input/>');
lastname.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder", "Last Name").appendTo(form);

let email = $('<input/>');
email.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder", "Email").appendTo(form);

let phone = $('<input/>');
phone.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder", "Phone").appendTo(form);

let password = $('<input/>');
password.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder", "Password").appendTo(form);

let compassword = $('<input/>');
compassword.css({
    "width": "350px",
    "height": "30px",
    "border": "2px solid black",
}).attr("placeholder", "Password").appendTo(form);

let button = $('<button>');
button.css({
    "height": "30px",
    "width": "100px"
}).text("Submit").appendTo(form)


button.on('click', (e) =>{
    e.preventDefault();
    const user ={
     firstnamevalue : firstname.val(),
     lastnamevalue : lastname.val(),
     emailvalue : email.val(),
     phonevalue : phone.val(),
     passwordvalue : password.val(),
     compasswordvalue : compassword.val()
   }
   if(!firstname.val() || !lastname.val() || !email.val() || !phone.val() || !password.val() || !compassword.val())
   {
   validation.css("display","block")
   validation.text("Please fill all the fields")
   }

   if(password.val() === compassword.val()){
    alert("password Matched");
    } else {
      alert("Password Not Matched");
      window.location.reload();
    }

    const existinguser = JSON.parse(localStorage.getItem("user")) || [];
    console.log(existinguser)
    let check=existinguser.find((items) =>{
         return items.emailvalue === user.emailvalue;
    })
    if(check){
        alert("User Alreaty Exists");
        window.location.href ="login.html";
    } else {
        existinguser.push(user);
        localStorage.setItem("user", JSON.stringify(existinguser));
        alert("Account Created Successfully");
        window.location.href ="login.html";
    }
})