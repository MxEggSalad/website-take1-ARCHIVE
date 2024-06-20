// OH GOD 
// each of these functions runs through checking if everything is correct in the given strings
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}


//assings everything from the main html file a variable, then makes a long ass if statement checking if they aline with the functions above.
//if so, it shows everything to the user in an alert
//if not, it yells at you
function formValidation()
{
  var firstname = document.registration.firstname;
  var surname = document.registration.surname;
  var username = document.registration.username;
  var emailaddress = document.registration.emailaddress;
  var password = document.registration.password;
  var confirmpassword = document.registration.confirmpassword;
  var gender = document.registration.gender;
  var address = document.registration.address;
  var phonenumber = document.registration.phonenumber;

  if(allLetter(firstname))
  {
    if(allLetter(surname))
    {
      if(ValidateEmail(emailaddress))
      {
        if(password.value == confirmpassword.value){
        if(allnumeric(phonenumber)) {
          alert(`First Name: ${firstname.value}
            \nSurname: ${surname.value}
            \nUsername: ${username.value}
            \nEmail Address: ${emailaddress.value}
            \nPassword: ${password.value}
            \nGender: ${gender.value}
            \nAddress: ${address.value}
            \nPhone Number: ${phonenumber.value}`);
          return
          }
        }
      }
    }
  }
  alert("YOU DID IT WRONG");
}