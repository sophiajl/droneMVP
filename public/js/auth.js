
        var app = document.querySelector('#signInForm');
        app.butLogin = function () {
          var email = app.txtEmail;
          var password = app.txtPassword;
          if (!email || !password) {
            return console.log('email and password required');
          }
          // Sign in user
          firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log('signIn error', error);
              // ...
            });
            signInLink.value = "LOG OUT";
        };
        app.butRegister = function() {
          var email = app.email;
          var password = app.password;
          if (!email || !password) {
            return console.log('email and password required');
          }
          // Register user
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
              console.log('register error', error);
              if (error.code === 'auth/email-already-in-use') {
                alert("Email already in use. Please try again.")
              }
            
            });
            signInLink.value = "LOG OUT";
        };
    
        app.signOut = function() {
          // Sign out
          firebase.auth().signOut();
        };
        // Listen to auth state changes
        firebase.auth().onAuthStateChanged(function(user) {
          app.user = user;
          console.log('user', user);
        });
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    });

    
    


$('#signInLink').on('click', function() {
    if (new String(document.getElementById('signInLink').value).valueOf() == new String("LOG OUT").valueOf()) {
        firebase.auth().signOut();
        const signInLink = document.getElementById('signInLink');
        
        alert("You have been logged out!");
        signInLink.value = "SIGN IN";
    }
});
