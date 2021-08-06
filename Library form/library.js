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
    var typ = null;
    var tp = document.getElementsByName('type');

    for (i = 0; i < tp.length; i++) {
        if (tp[i].checked)
            var typ = tp[i];
    }
    if (typ == null) {
        return true;
    }
    return false;
}
/*

function checkPayment() {
    //var ptype = document.getElementById("ptype").selectedOptions[0].value;
    var ptype = document.getElementById('ptype').selectedOptions[0].value;
    if (ptype == null || ptype == "Select a payment type" || ptype == "") {
        return true;
    }
    return false;
}

*/


//===========================================================================================

function formValidation() {



    if (checkFName()) {
        var output = "*Required";
        document.getElementById("fn").innerHTML = output;

    }

    if (checkLName()) {
        var output = "*Required";
        document.getElementById("ln").innerHTML = output;

    }

    if (checkEmail()) {
        var output = "*Required";
        document.getElementById("em").innerHTML = output;

    }

    if (checkAddress()) {
        var output = "*Required";
        document.getElementById("ad").innerHTML = output;

    }

    if (checkContact()) {
        var output = "*Required";
        document.getElementById("cn").innerHTML = output;

    }

    if (checkUType()) {
        var output = "*Required";
        document.getElementById("ut").innerHTML = output;

    }
    /*
        if (checkPayment()) {
            var output = "*Required";
            document.getElementById("pt").innerHTML = output;
    
        }*/

    else {
        window.alert('User added successfully!');
    }


}
