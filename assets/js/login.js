function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   if (username === "" || password === "") {
        alert("Username and password cannot be empty.");
        
    } 

}
   function login(e) {
    e.preventDefault();   
    window.location = "index.html";
  }