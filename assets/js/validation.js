function formValidation()
{
    var firstName = document.registration.firstName;
    var passid = document.registration.passid;
    var lastName = document.registration.lastName;
    var ucountry = document.registration.country;
    var uemail = document.registration.email;
	
    var mgender = document.getElementById("male");
    var fgender = document.getElementById("female");

    if(validatefirstName(firstName,2,17))
    {
        if(validatePassword(passid,5,19))
        {
            if(allLetter(lastName))
            {
                
                    if(countryselect(ucountry))
                    {
                        
                            if(ValidateEmail(uemail))
                            {
                                if(validgender(mgender,fgender))
                                {
                                }
                            }
                        
                    }
                
            }
        }
    }
    return false;
}


function validatefirstName(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a firstName.\n";
        alert(error);
        return false;

    } else if ((fld.value.length <2) || (fld.value.length > 17)) {
        fld.style.background = 'Yellow';
        error = "The firstName is the wrong length.\n";
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "The firstName contains illegal characters.\n";
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
    return true;
}

function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 5) || (fld.value.length > 19)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
    return true;
}

function allLetter(lastName)
{
    var letters = /^[A-Za-z]+$/;
    if(lastName.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        return false;
    }
}



function countryselect(ucountry)
{
    if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        return false;
    }
    else
    {
        return true;
    }
}


function ValidateEmail(email) {

    //var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
	else
	{
		return true;
	}
}

function validgender(mgender,fgender)
{
    x=0;

    if(mgender.checked)
    {
        x++;
    } 
	if(fgender.checked)
	{
    x++;
	}
    if(x==0)
    {
        alert('Select Male/Female');
        return false;
    }
    else
    {
        
        return true;
	}
}