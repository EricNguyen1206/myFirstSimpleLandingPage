function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function myFunction() {
    var text = document.getElementById("email").value;
    var message;
    if (text == '') {
        document.getElementById("form-1").style.border = "2px solid hsl(0, 93%, 68%)";
        document.getElementById("warning").style.visibility = "visible";
        message = "Please provide your email";

    } else if (!validateEmail(text)) {
        document.getElementById("form-1").style.border = "2px solid hsl(0, 93%, 68%)";
        message = "Please provide a valid email";
        document.getElementById("warning").style.visibility = "visible";
    } else {
        message = "";
        document.getElementById("warning").style.visibility = "hidden";
        document.getElementById("form-1").style.border = "1px solid #dbcbcc";
    }

    document.getElementById("form-message").innerHTML = message;
}