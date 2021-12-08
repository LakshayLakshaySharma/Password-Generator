
function getPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`!@#$%%^&*()_+/*+-";
    
    var passwordLength = 15;
    var password = "";
    
    for(var i =0; i < passwordLength; i++){
      var randomPassword = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomPassword, randomPassword +1);
    }
    document.getElementById("password").value = password;
  }

  