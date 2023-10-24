function submitForm() {
    var firstName = document.getElementsByName('firstname')[0].value;
    var lastName = document.getElementsByName('lastnname')[0].value;
    var dob = document.querySelector('input[type="date"]').value;
    var country = document.getElementById('country').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var profession = document.querySelector('input[type="text"][placeholder="Profession"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var phone = document.getElementById('phone').value;

    var message = "First Name: " + firstName + "\n" +
                  "Last Name: " + lastName + "\n" +
                  "Date of Birth: " + dob + "\n" +
                  "Country: " + country + "\n" +
                  "Gender: " + gender + "\n" +
                  "Profession: " + profession + "\n" +
                  "Email: " + email + "\n" +
                  "Phone: " + phone;

    alert(message);

    document.getElementById("Survey").reset();
}

