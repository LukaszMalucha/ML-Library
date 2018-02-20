function sendMail(contactForm) {
    emailjs.send("gmail", "ml_library", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "contact_us": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", response);
            });
}