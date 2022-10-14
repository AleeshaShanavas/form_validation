// for declare values 
var email = document.getElementById("email");
var pass = document.getElementById("pass1");
var form = document.querySelector("form");



form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    //for hide  button, form from index page when submit button click
    var form = document.getElementById("frm");
    form.style.display = "none";
    var head = document.getElementById("new");
    head.style.display = "none";
    var butnn = document.getElementById("btnn");
    butnn.style.display = "none"; 
    if (sessionStorage) {
        // set username value in session
        sessionStorage.setItem("username", "admin");
        // read username value from session using key
        var namw = sessionStorage.getItem("username");
        document.getElementById("hed").innerHTML = "welcome to " + namw;

        var a = document.createElement('a');
        // Create the text node for anchor element.
        var link = document.createTextNode("back to login");
        // Append the text node to anchor element.
        a.appendChild(link);
        // Set the title.
        a.title = "back to login";
        // Set the href property.
        a.href = "index.html";
        // Append the anchor element to the body.
        document.getElementById("text").appendChild(a);


    } else {
        // if session not work then show message in user
        alert("Sorry, your browser do not support session storage.");
    }
}
)
// for check valid email and password
function checkpass() {
    var pass = pass1.value;//read password from index page
    var passc = "admin123";// set by default password
    var gmail = "admin@gmail.com";// set by default email
    var mail = email.value;//read email from index page
  
//if email and password are correct then input box border color is green
//and no show p tag value
    if (pass == passc & gmail == mail) {
        pass1.className = "success";
        email.className = "success";
        document.getElementById("text").innerHTML = "";
        // submit button show 
        document.getElementById("signin").disabled = false;

    }
//if email and password are not correct then input box border color is red
//and show error message in  p tag value 
    else {
        document.getElementById("signin").disabled = true;
        email.className = "error";
        pass1.className = "error";
        document.getElementById("text").innerHTML = "email and password doesnot match";
    }
    //89074
    // / 86966
}

// submit button hide 
document.getElementById("signin").disabled = true;