function validateForm() {
    
    
    let email = document.forms["form"]["email"].value;
   
    
    
        if( nameValidate() &&  ageValidate() && emailValidate() && numberValidate() && checkValidation()){
            alert("Successfully Submitted");    
            return true;
        }
        else{
            return false;
        }


  }


  function nameValidate(){
    let name = document.forms["form"]["name"].value;
    var letters = /^[A-Za-z ]+$/;
    if (name == "" ) {
       document.getElementById("name1").innerHTML = "* Name Must be filled out * ";
            return false;
    }
    else if (!name.match(letters)) {
        // alert("Nmae must be in only alphabet");
        document.getElementById("name1").innerHTML = "* Name must be in only alphabet * ";
        return false;
    }else{
        document.getElementById("name1").innerHTML = "";
        return true;
    }

  }


  function ageValidate(){
  
    let age = document.forms["form"]["age"].value;
    if (age == "") {
        document.getElementById("name2").innerHTML = "* Age Must be filled out * ";
            return false;
    }
    else if (isNaN(age)){
        // alert("Enter only numeric Value");
        document.getElementById("name2").innerHTML = "* Enter only numeric Value * ";
        return false;
    }
    else if (age < 18) {
        // alert("Age should be greater than 18");
        document.getElementById("name2").innerHTML = "* Age should be greater than 18 * ";
        return false;
    }else{
        document.getElementById("name2").innerHTML = "";
        return true;
    }
  }

  function emailValidate(){
      var same = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
      let email = document.forms["form"]["email"].value;
      if (email == ""  ) {
        document.getElementById("name3").innerHTML = "* Email Must be filled out * ";
            return false;
    }
    else if (same.test(email)){
        document.getElementById("name3").innerHTML = "";
        return true;
    }else{
        // alert("Enter valid email");
        document.getElementById("name3").innerHTML = "* Enter valid email * ";
        return false;
      
    }
  
  }


  function numberValidate(){
    var letters = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phone = document.forms["form"]["phone"].value;
    if(phone == ""){
        document.getElementById("name4").innerHTML = "* Number Must be filled out * ";
            return false;
    }
    else if (!phone.match(letters)){
        // alert("Enter only phone no.");
        document.getElementById("name4").innerHTML = "* Enter only phone no. * ";
        return false;
    }else{
        document.getElementById("name4").innerHTML = "";
        return true;
    }
  }







  function checkValidation(){
      var one = document.querySelector('#Hob1:checked');
      var two = document.querySelector('#Hob2:checked');
      var three = document.querySelector('#Hob3:checked');
      console.log(one);
      console.log(two);
      console.log(three);
   if( one == null && two == null && three == null){
    // alert("checked atleast one Hobby");
    document.getElementById("name5").innerHTML = "*checked atleast one Hobby* ";
    return false;
   }else{
    document.getElementById("name5").innerHTML = "";
    return true;
}
  }
