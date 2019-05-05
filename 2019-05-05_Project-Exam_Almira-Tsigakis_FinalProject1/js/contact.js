// CONTACT FORM
// help using w3schools and geeks for geeks

var submitBtn = document.getElementById('submitMessage');
var firstNameError = document.getElementById('firstNameError');
var lastNameError = document.getElementById('lastNameError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');

firstNameError.style.display = "none";
lastNameError.style.display = "none";
emailError.style.display = "none";
messageError.style.display = "none";

  // Submit button validation
  submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    var inputName = document.getElementById("firstName").value;
    var inputLast = document.getElementById("lastName").value;
    var inputEmail = document.getElementById("email").value;
    var inputMessage = document.getElementById("message").value;

    // Validate first name
    function checkFirstName(firstName) {
      var firstNameRequired = /[a-zA-Z.-]/g;
      if (firstName.match(firstNameRequired)) {
        firstNameError.style.display = "none";
      } else {
        firstNameError.style.display = "block";
        return false;
      }
    }

    // Validate last name
    function checkLastName(lastName) {
      var lastNameRequired = /[a-zA-Z.-]/g;
      if (lastName.match(lastNameRequired)) {
        lastNameError.style.display = "none";
      } else {
        lastNameError.style.display = "block";
        return false;
      }
    }

    // Validate email address
    function checkEmail(emailAdr) {
      var emailRequired = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
      if (emailAdr.match(emailRequired)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
        return false;
      }
    }

    // Validate message
    function checkMessage(message) {
      var messageRequired = /[a-zA-Z.-]/g;
      if (message.match(messageRequired)) {
        messageError.style.display = "none";
      } else {
        messageError.style.display = "block";
        return false;
      }
    }

    // Call functions
    checkFirstName(inputName);
    checkLastName(inputLast);
    checkEmail(inputEmail);
    checkMessage(inputMessage);

    function redirect(){
      if (messageError.style.display === "none" && emailError.style.display === "none" && lastNameError.style.display === "none" && firstNameError.style.display === "none") {
        window.location.href="success.html";
      }
    }

    redirect();


  });
