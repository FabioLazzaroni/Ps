$(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        country : "required",
        city : "required",
        carBrand: "required",
        carModel:"required",
		check:"required",
        email: {
          required: true,
          email: true
        },
        
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        email: "Please enter a valid email address",
        carBrand: "Please select your Car Brand",
		carModel: "Please select your Car Model",
		country: "Please select your country",
		city: "Pleas enter your city",
		check: "check"
      },
      submitHandler: function(form) {
        form.submit();
      }
	  
    });
  });
  
  