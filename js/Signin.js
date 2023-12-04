const firebaseConfig = {
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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form using jQuery
  let email = $('#login').val();
  let password = $('#pwd').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
        window.location.href = 'Surveyresult.html';
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add a google login choice here 
$('#google').click(function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("Sign in through google" + user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});