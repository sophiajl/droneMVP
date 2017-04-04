/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$("#left").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$("#right").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

function firebase() {
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDn8L0VPArpzp99f48fwPSKbiFkO_5lTV4",
        authDomain: "dronemvp-c08f1.firebaseapp.com",
        databaseURL: "https://dronemvp-c08f1.firebaseio.com",
        projectId: "dronemvp-c08f1",
        storageBucket: "",
        messagingSenderId: "866448759560"
    };
    firebase.initializeApp(config);
    
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const butLogin = document.getElementById('butLogin');
    const butSignUp = document.getElementById('butSignUp');
    const signInLink = document.getElementById('signInLink');
    
    butLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        signInLink.value = "LOG OUT";
        
    });
    
    butSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message)); 
        signInLink.value = "LOG OUT";
    });
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.lg('not logged in');
        }
    });
}

$('#signInLink').on('click', function() {
    if (new String(document.getElementById('signInLink').value).valueOf() == new String("LOG OUT").valueOf()) {
        firebase.auth().signOut();
        const signInLink = document.getElementById('signInLink');
        
        alert("You have been logged out!");
        signInLink.value = "SIGN IN";
    }
});
