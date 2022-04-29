console.log("signin form")
document.querySelector("h3").addEventListener("click", formValidation)
function showOrHideDiv() {
    var v = document.getElementById("ashish");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
 }
function formsigninValidation() {
    var uname = document.forms["signinform"]["username"];
    var upass = document.forms["signinform"]["userpassword"];
    if (allLetter(uname)) {
        passid_validation(upass, 5, 8)
    }
    var d = {
        name: uname.value,
        pass: upass.value
    }
    console.log(d);

    console.log("formvalidation");
    alert("form submitted")

}
function formsignupValidation() {
    var fname = document.forms["signupform"]["fname"];
    var mname = document.forms["signupform"]["mname"];
    var lname = document.forms["signupform"]["lname"];
    var gender = document.forms["signupform"]["gender"];
    var uname = document.forms["signupform"]["username"];
    var upass = document.forms["signupform"]["userpassword"];
    if (allLetter(fname) && fname.value.length < 30) {
        if (allLetter(mname) && fname.value.length < 30) {
            if (allLetter(lname) && fname.value.length < 30) {
                if (gender.checked) {

                    if (alphanumeric(uname)) {
                        if (passid_validation(upass)) {
                            alert("form submitted successfully");
                        }
                    }
                } else {
                    alert("gender field is empty");
                }

            }
        }

    }

}
function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User Id should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
// function validsex(umsex, ufsex) {
//     x = 0;

//     if (umsex.checked) {
//         x++;
//     } if (ufsex.checked) {
//         x++;
//     }
//     if (x == 0) {
//         alert('Select Male/Female');
//         umsex.focus();
//         return false;
//     }
// if(x===2)
// {
//     alert("selct one option");
//     return false;
// }
//     else {
//         alert('Form Succesfully Submitted');
//         window.location.reload()
//         return true;
//     }
// }
// }
