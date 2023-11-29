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
    //clear the password and confirm password
    $('input[name="password"]').val("");
    $('input[name="cpassword"]').val("");
    return;
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName:username
      }).then(()=>{
        console.log("updated profile successfully");
        console.log(user.displayName, " are signed up");

        let date = "Wed, 29 November 2023 12:57:00 GMT";
        let userinformation = {
          "username": user.displayName,
          "email": email,
          "signupDate": date,
          "lastLogin": date
        };
        // save the user information in the database
        let db = firebase.firestore();
        db.collestion("usertable").doc(user.displayName).set(userinformation).then(()=>{
          console.log("user information saved successfully");
          window.location.href = "Login.html";
        });

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
