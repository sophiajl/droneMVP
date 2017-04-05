
        var app = document.getElementById('signInForm');
        console.log('app is ' + app);
        var butLogin = document.getElementById('butLogin');
console.log('butLogin is ' + butLogin);
        var butRegister = document.getElementById('butRegister');
console.log('butRegister is ' + butLogin);

<script>
        function LoginButton() {
            console.log('In butLogin');
          var email = document.getElementById('txtEmail');
          var password = document.getElementById('txtPassword');
          
          console.log('email is ' + email + ' password is' + password);
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

        function RegisterButton() {
            console.log('In butRegister');
          var email = document.getElementById('txtEmail');
          var password = document.getElementById('txtPassword');
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
    
        document.signOut = function() {
          // Sign out
          firebase.auth().signOut();
        };
        // Listen to auth state changes
        firebase.auth().onAuthStateChanged(function(user) {
          console.log('email', txtEmail);
        });
    
    
</script>

    
    


$('#signInLink').on('click', function() {
    if (new String(document.getElementById('signInLink').value).valueOf() == new String("LOG OUT").valueOf()) {
        firebase.auth().signOut();
        const signInLink = document.getElementById('signInLink');
        
        alert("You have been logged out!");
        signInLink.value = "SIGN IN";
    }
});
