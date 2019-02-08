
var obj;

var auth2 = function() {

    const email = document.getElementById("email-address");
    const pass = document.getElementById("password");
    const signin = document.querySelector("#signin");
    const signup = document.querySelector("#signup");
    const message = document.querySelector("#message");
    const signout = document.querySelector("#signout");
    let login_flag = false; 

    const config = {
        apiKey: "AIzaSyCUeuohOcT-Jrwto14H2eBMWCzHBnWOkDo",
        authDomain: "olivera-d91f5.firebaseapp.com",
        databaseURL: "https://olivera-d91f5.firebaseio.com",
        projectId: "olivera-d91f5",
        storageBucket: "olivera-d91f5.appspot.com",
        messagingSenderId: "284351997680"
    };

    function fsignin(event){
        console.log('Signin:'+ email.value + " and " + pass.value);
        firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
            .catch(function(error){
                console.log('Error in login: ' + error.code + " " +  error.message);
            })
    };

    function fsignup(event) {
        console.log('click of signup');
        firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
            .catch(function(error){
                console.log('Error creating user ' + error.code + ' ' + error.message);
            })
    };

    function fAuthStateChanged(user){
        if (user) {
            message.innerHTML =  user.email + " is logged in..";
            login_flag = true;
            signout.classList.remove('dn');
            signout.classList.add('dib');
          } else {
            message.innerHTML = "Logged out..";
            login_flag = false;
            signout.classList.add('dn');
            signout.classList.remove('dib')
          }
    }
    function initiateFirebase(){
        var app = firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(fAuthStateChanged);
    }
    
    function fsignout() {
        firebase.auth().signOut();
        // .then(function(){
        //     console.log('Signout ');
        // }, function() { console.log('Error in signout');})
    }

    return {
        addButtonListener: function(){
            signin.addEventListener('click', fsignin);
            signup.addEventListener('click', fsignup);
            signout.addEventListener('click', fsignout);
        },
        initiateFirebase:  initiateFirebase   
    }

}

var x = auth2();
x.addButtonListener();
x.initiateFirebase();




