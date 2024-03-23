// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { 
    getAuth,
    signInWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
 import { 
    ref,
    set,
    getDatabase,
    push,
    onValue
 } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGMwHf3QkKby-JvY_oQ47pNsTwyMa97Uk",
  authDomain: "soh-riyo.firebaseapp.com",
  databaseURL: "https://soh-riyo-default-rtdb.firebaseio.com",
  projectId: "soh-riyo",
  storageBucket: "soh-riyo.appspot.com",
  messagingSenderId: "357415748712",
  appId: "1:357415748712:web:95fbb238ba7bdf7a2227dd",
  measurementId: "G-4WG8BFQX2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();

var model = {}


var emai = document.getElementById("email")
var password = document.getElementById("password")

window.loginUser = function 
(e){
    model.email = email.value;
    model.password = password.value;

    console.log(model);
   signInWithEmailAndPassword(auth,model.email,model.password)
    .then(function(res){
        console.log(res.user.uid,"success Response");
        model.id = res.user.uid;
        var reference = ref(database, `user/${model.id}`);
        onValue(reference,function(user){
            console.log(user.val());
        });
        
        email.value ="";
        
        password.value = "";
    }) 
    .catch(function(err){
            console.log(err,"Err Response")
            alert(err.message);
        });
};