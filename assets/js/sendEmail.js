/*--Created from help with Code Institute video URL:https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/--*/
/*--Created using EmailJS documentation URL:https://www.emailjs.com/docs/sdk/installation/--*/
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
    return false;
}

function callAlert (event) {
    window.alert('Thanks for getting in touch! We will get back to you shortly');
}

