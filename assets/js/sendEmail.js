/*-----------------------------------Created from help with Code Institute video--*/
function sendMail(contactForm) {
    emailjs.send("service_kzt2xta","trek-ahead", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "includes": contactForm.includes.value,
        "location": contactForm.location.value,
        "experience": contactForm.experience.value,
        "message": contactForm.furtherInformation.value
    }, "HReCvzB3xhQUdsqo2")
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false
}