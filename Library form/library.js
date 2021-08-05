
function checkFName() {
    var fname = document.getElementById("fname").value;
    console.log(fname);
    if (fname == null || fname == "") {
        return true;
    }
}

function checkLName() {
    var lname = document.getElementById("lname").value;
    if (lname == null || lname == "") {
        return true;
    }
    return false;
}

function checkAddress() {
    var address = document.getElementById("address").value;
    if (address == null || address == "") {
        return true;
    }
    return false;
}

function checkEmail() {
    var email = document.getElementById("email").value;
    if (email == null || email == "") {
        return true;
    }
    return false;
}

function checkContact() {
    var number = document.getElementById("number").value;
    if (number == null || number == "") {
        return true;
    }
    return false;
}

function checkUType() {
    var type = document.getElementById("type").value;
    if (type == null || type == "") {
        return true;
    }
    return false;
}

function checkPayment() {
    var ptype = document.getElementById("ptype").value;
    if (ptype == null || ptype == "") {
        return true;
    }
    return false;
}




//===========================================================================================

function formValidation() {

    //var bool = true;

    if (checkFName()) {
        var output = "*Required";
        document.getElementById("fn").innerHTML = output;
        // bool = false;
    }

    if (checkLName()) {
        var output = "*Required";
        document.getElementById("ln").innerHTML = output;
        //bool = false;
    }

    if (checkEmail()) {
        var output = "*Required";
        document.getElementById("em").innerHTML = output;
        //bool = false;
    }

    if (checkAddress()) {
        var output = "*Required";
        document.getElementById("ad").innerHTML = output;
        // bool = false;
    }

    if (checkContact()) {
        var output = "*Required";
        document.getElementById("cn").innerHTML = output;
        //bool = false;
    }

    if (checkUType()) {
        var output = "*Required";
        document.getElementById("ut").innerHTML = output;
        // bool = false;
    }

    if (checkPayment()) {
        var output = "*Required";
        document.getElementById("pt").innerHTML = output;
        //bool = false;
    }

    else {
        alert('User added successfully!')
    }

    // return bool;
}