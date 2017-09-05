var config = {
    apiKey: "AIzaSyAo1n9NLdCFhF2hhJOmFz9bYAD47IpJTz0",
    authDomain: "vert-dnag-project.firebaseapp.com",
    databaseURL: "https://vert-dnag-project.firebaseio.com",
    projectId: "vert-dnag-project",
    storageBucket: "vert-dnag-project.appspot.com",
    messagingSenderId: "916057938873"
};
firebase.initializeApp(config);

var signupbtn = document.getElementById("signup");
var signinbtn = document.getElementById("signin");

signupbtn.addEventListener("click", function() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        alert("Account Created!")
    }).catch(function(error) {
        if (error != null) {
            console.log(error.message);
            return;
        }
    });

})

signinbtn.addEventListener("click", function() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        alert("successfully logged in!")
    }).catch(function(error) {
        if (error != null) {
            console.log(error.message)
        }
    });

})
