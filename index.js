function validateForm() {

    var regName = /^[A-Za-z]+$/;
    var fname = document.forms["myform"]["fname"].value;
    if(fname == "" || fname==null){
        alert('First Name cannot be empty');
        return false;
    }
    if(!(regName.test(fname)))
    {
        alert('Invalid first name given');
        return false;
    }

    var regName = /^[A-Za-z]+$/;
    var lname = document.forms["myform"]["lname"].value;
    if(lname == "" || lname==null){
        alert('last Name cannot be empty');
        return false;
    }
    if(!(regName.test(lname)))
    {
        alert('Invalid last name given');
        return false;
    }
    
    var email_re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=document.forms["myform"]["email"].value;
    if(email == "" || email==null){
        alert('Email cannot be empty');
        return false;
    }
    if(!(email_re.test(email)))
    {
        alert('Invalid email');
        return false;
    }


    var pass_re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var password = document.forms["myform"]["password"].value;
    if(password == "" || password==null){
        alert('Password cannot be empty');
        return false;
    }
    if(!(pass_re.test(password)))
    {
        alert('Invalid password , it must contain captial letter, small letter, special character and number');
        return false;
    }


    var password2 = document.forms["myform"]["cpassword"].value;
    if (password2 == "" || password2==null) {
        alert('Password cannot be empty');
        return false;
        
     } if (password2 !== password) {
        alert('Password does not match');
        return false;
     } 
     

}

function adddata()
{
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;

    localStorage.setItem('firstname',first_name);
    localStorage.setItem('lastname',last_name);
}

function Toggle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}

function Toggle2() {
    var temp2 = document.getElementById("cpassword");
    if (temp2.type === "password") {
        temp2.type = "text";
    }
    else {
        temp2.type = "password";
    }
}
