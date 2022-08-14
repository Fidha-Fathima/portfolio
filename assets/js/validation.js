$(document).ready(function () {
     
    jQuery.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-z A-Z]+$/.test(value);
      },
      "Letters only please"
    );
    jQuery.validator.addMethod(
      "minlength5",
      function (value, element) {
        return this.optional(element) || (value.trim().length >= 5);
      },
      "Minimum 5 characters without space"
    );
    $(".vgg-contact-form").validate({
      rules: {
          name: {
            required: true,
          minlength5: true,
          lettersonly: true,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
            required: true,
          minlength5: true,
          minlength: 10,
          maxlength: 200,
        },
      },
      messages: {
        name: {
          minlength: "Please Enter Your Full Name",
        },
        email: {
          email: "Please enter a valid Email id",
        },
        message: {
          minlength: "Its too short! minimum 10 characters",
          maxlength: "Oh no! it's too large",
        },
      },
      submitHandler: function (form) {
        console.log("True");
        console.log("in function submit");
        submit();
      },
    });
  });
  function submit() {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbw9SquuQsk-bACFgNVA-JO2k4VSqQWYUzBlNrm1_z9oteW5ssi-DEHV2m8XWcNwydVncw/exec",
      data: $(".vgg-contact-form").serialize(),
      method: "POST",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  }