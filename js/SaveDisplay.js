// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//gloabl variable
let currentuser = "";
let currentemail = "";

//check if user is logged in
firebase.auth().onAuthStateChanged((user) => {
  if (user){
    currentuser = user.displayName;
    currentemail = user.email;
    console.log("Logged in: ",currentuser, currentemail);
  } else{
    console.log("Not logged in");
    window.location.href = "Login.html";
  }
});

//sign out code
$("#signout").click(function(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log("Sign out successful");
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
    console.log("Sign out error");
  });
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
