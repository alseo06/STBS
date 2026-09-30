/* =========================================
   BOOTSTRAP TOOLTIP
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const tooltipElements =
        document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );

    tooltipElements.forEach(function (element) {

        new bootstrap.Tooltip(element);

    });



    /* =========================================
       BOOTSTRAP POPOVER
    ========================================= */

    const popoverElements =
        document.querySelectorAll(
            '[data-bs-toggle="popover"]'
        );

    popoverElements.forEach(function (element) {

        new bootstrap.Popover(element);

    });

});



/* =========================================
   CHECK AVAILABILITY
========================================= */

function checkAvailability() {

    const category =
        document.getElementById("tourCategory").value;

    const date =
        document.getElementById("departureDate").value;

    const travellers =
        document.getElementById("travellers").value;


    if (date === "") {

        alert(
            "Please select your departure date."
        );

        return;

    }


    alert(
        "Availability checked!\n\n" +
        "Tour: " + category +
        "\nDate: " + date +
        "\nTravellers: " + travellers
    );

}



/* =========================================
   BOOKING FORM VALIDATION
========================================= */

function validateBookingForm() {

    let valid = true;


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const participants =
        document.getElementById("participants").value;

    const packageName =
        document.getElementById("package").value;

    const consent =
        document.getElementById("consent").checked;



    /* Clear errors */

    document.getElementById("nameError").innerHTML = "";

    document.getElementById("phoneError").innerHTML = "";

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("consentError").innerHTML = "";



    /* NAME */

    if (name === "") {

        document.getElementById("nameError").innerHTML =
            "Please enter your name.";

        valid = false;

    }



    /* PHONE */

    if (phone === "") {

        document.getElementById("phoneError").innerHTML =
            "Please enter your phone number.";

        valid = false;

    }



    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "Please enter your email.";

        valid = false;

    }

    else if (!emailPattern.test(email)) {

        document.getElementById("emailError").innerHTML =
            "Please enter a valid email address.";

        valid = false;

    }



    /* PARTICIPANTS */

    if (participants === "" || participants < 1) {

        alert(
            "Please enter the number of participants."
        );

        valid = false;

    }



    /* PACKAGE */

    if (packageName === "") {

        alert(
            "Please select a tour package."
        );

        valid = false;

    }



    /* ETHICAL CONSENT */

    if (!consent) {

        document.getElementById("consentError").innerHTML =
            "You must agree to the ethical consent before submitting.";

        valid = false;

    }



    /* SUCCESS */

    if (valid) {

        alert(
            "Booking submitted successfully!\n\n" +
            "Thank you, " + name +
            "!"
        );

    }


    return false;

}



/* =========================================
   CONTACT FORM VALIDATION
========================================= */

function validateContactForm() {

    let valid = true;


    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const consent =
        document.getElementById("contactConsent").checked;



    /* Clear errors */

    document.getElementById("contactNameError").innerHTML = "";

    document.getElementById("contactEmailError").innerHTML = "";

    document.getElementById("messageError").innerHTML = "";

    document.getElementById("contactConsentError").innerHTML = "";



    /* NAME */

    if (name === "") {

        document.getElementById("contactNameError").innerHTML =
            "Please enter your name.";

        valid = false;

    }



    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("contactEmailError").innerHTML =
            "Please enter your email.";

        valid = false;

    }

    else if (!emailPattern.test(email)) {

        document.getElementById("contactEmailError").innerHTML =
            "Please enter a valid email address.";

        valid = false;

    }



    /* MESSAGE */

    if (message === "") {

        document.getElementById("messageError").innerHTML =
            "Please enter your message.";

        valid = false;

    }



    /* CONSENT */

    if (!consent) {

        document.getElementById("contactConsentError").innerHTML =
            "Please provide your consent.";

        valid = false;

    }



    /* SUCCESS */

    if (valid) {

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );

        document.getElementById("contactForm").reset();

    }


    return false;

}