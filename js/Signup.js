var firebaseConfig = {
  apiKey: "AIzaSyCZaIrB-uIQxwuOEkNELGAW8zEbI6HlvoU",
    authDomain: "database2023-40b3f.firebaseapp.com",
    projectId: "database2023-40b3f",
    storageBucket: "database2023-40b3f.appspot.com",
    messagingSenderId: "677166105251",
    appId: "1:677166105251:web:acf68fd55a5ffbdace3516",
    measurementId: "G-D4WGR9SG8K"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  let username = $('input[name="username"]').val();
  let email = $('input[name="email"]').val();
  let password = $('input[name="password"]').val();
  let cpassword = $('input[name="cpassword"]').val();
  //check if the password and confirm password are the same
  if (password != cpassword) {
    alert("Password and confirm password are not the same");
    return;
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName:username
      });
      console.log("You are signed up");
      //window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
