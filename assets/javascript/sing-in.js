var config = {
    apiKey: "AIzaSyDR520PVWe0l8PyVbC95S7FBsIaYF0eh1w",
    authDomain: "the-ukraine-train-project.firebaseapp.com",
    databaseURL: "https://the-ukraine-train-project.firebaseio.com",
    projectId: "the-ukraine-train-project",
    storageBucket: "",
    messagingSenderId: "616421465352"
 };

 firebase.initializeApp(config);


$(document).ready(function() {
  // Create a variable to reference the database.
  var database = firebase.database();

  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: './index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
      },
    ],
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);



  
    // // Add login event
    // $("#loginButton").on("click", function(event) {
    //   event.preventDefault();
  
    //   // Sign in
    //   var username = $("#usrname").val();
    //   var password = $("#psw").val();
  
    //   database.ref().push({
    //     name: username,
    //     password: psw,
    // });

    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(username, password)
    //     .then(function(user){
    //       console.log(user);
    //       $("#myModal").modal('hide');
    //     })
    //     .catch(function(error) {
    //       // Handle Errors here.
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       console.log(errorMessage, errorCode);
    //       $('#usrname').val('');
    //       $('#usrname').css("border-color", "red");
    //       $('#usrname').attr("placeholder", errorMessage)
    //     });

        
    // });
  
    // // Add signup event
    // $("#signup").on("click", e => {
    //   e.preventDefault();
    //   var email = $("#signup-email").val();
    //   var password = $("#signup-password").val();
    //   // Get  FB authentication
    //   auth = firebase.auth();
    //   // Sign In
    //   promise = auth.createUserWithEmailAndPassword(email, password);
    //   promise.catch(e => console.log(e.message));
    // });
  

  });