//for  declare values 
var nam = document.getElementById("name");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var ph = document.getElementById("ph");
var forms = document.querySelector("form");
var tables=document.getElementById("tables");

//for hide table
tables.style.display="none";

//for check valid name 
function validname() {
   //assgin name value
    var fn = nam.value;
    if (isNaN(fn)) {
        //if name is not number then input box border green
        nam.className = "success";
        document.getElementById("text").innerHTML = "";
        
    } else {
        //if name value is number then show error message and input box red
        // submit button hide 
        //and show error message in  p tag value 
        nam.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "please enter name ";
    }
}

//for checking vaild emailid
function validemail() {
    var mail = email.value;  //assign email value
    //create regex for checking valid email id
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(mail)) {
        // if test mailid value in regex then true ,show success message
        email.className = "success";
        document.getElementById("text").innerHTML = "";
    } else {
        //if test mailid value in regex then false ,show error message
        // submit button hide
        //and show error message in  p tag value  
        email.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "please enter the valid email";

    }
}


//for checking valid phone number
function validph() {
    var num = ph.value;
    if (isNaN(num)) {
        //if phone number is not number then input box border red and show error message
        // submit button hide 
        //and show error message in  p tag value 
        ph.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "please enter the valid phone number";
    } else {
       // read the phone number length 
        var numl = num.length;
        if (numl == 10) {
            // if phone number length is correct 10 then show success message
            ph.className = "success";
            document.getElementById("text").innerHTML = "";
        } else {
            //if phone number length not equal to 10 then input box border red and show error message
            // submit button hide
            //and show error message in  p tag value  
            ph.className = "error";
            document.getElementById("signup").disabled = true;
            document.getElementById("text").innerHTML = "please enter the valid phone number";
        }
    }
}


function validpass() {
    // read the phone number length 
    var passl = pass1.value.length;
    if (passl >= 8 & passl <= 16) {
         // if password length between 8 and 16 then show success message
        pass1.className = "success";
        document.getElementById("text").innerHTML = "";
    } else {
    // if password length not between 8 and 16then input box border red and show error message
    // submit button hide 
    //and show error message in  p tag value 
        pass1.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "Password length must be greater than 8 characters.and not excced 15 ";
    }
}

function validpassconform() {
    var pass = pass1.value;
    var passc = pass2.value;
    if (pass == passc) {
        // check password 1 and password2 are same then true,show success message
        pass1.className = "success";
        pass2.className = "success";
        document.getElementById("text").innerHTML = "";
        document.getElementById("signup").disabled = false;
      
    } else {
//if password1 and password2 are not correct then input box border color is red
//and show error message in  p tag value 
        // submit button hide 
        document.getElementById("signup").disabled = true;
        pass2.className = "error";
        document.getElementById("text").innerHTML = "Password not match";
    }
}

// submit button hide 
document.getElementById("signup").disabled = true;

forms.addEventListener("submit", function (evt) {
    evt.preventDefault();
    // console.log("sucessfully login");
     //for hide  button, form from signup page when submit button click
    var form = document.getElementById("frm");
    form.style.display = "none";
    var head = document.getElementById("new");
    head.style.display = "none";
    var butnn = document.getElementById("btnn");
    butnn.style.display = "none";
    if (sessionStorage) {  
        // display table in signup page
        tables.style.display = "block";

          // set name,emailid,phonenumber value in session
        sessionStorage.setItem("names",nam.value);
        sessionStorage.setItem("emails",email.value);
        sessionStorage.setItem("phs",ph.value);
        
         // read name,emailid,phonenumber  value from session using key
        var names= sessionStorage.getItem("names");
        console.log(names);
        document.getElementById("rname").innerHTML=names;
        var emails= sessionStorage.getItem("emails");
        document.getElementById("remail").innerHTML=emails;
        var phs= sessionStorage.getItem("phs");
        document.getElementById("rph").innerHTML=phs;
        
        // Create the text node for anchor element.
        // Append the text node to anchor element
        // Set the href property.
        // Append the anchor element to the body.
        var a = document.createElement('a');
        var link = document.createTextNode("back to login");
        a.appendChild(link);
        a.title = "back to login";
        a.href = "index.html";
        document.getElementById("text").appendChild(a);
    }

})