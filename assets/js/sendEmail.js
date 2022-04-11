function sendMail(contactForm) {
    emailjs.send("service_kzt2xta","trek-ahead", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "includes": contactForm.includes.value,
        "location": contactForm.location.value,
        "experience": contactForm.experience-level.value,
        "message": contactForm.further-information.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}