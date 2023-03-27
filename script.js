import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3mB7pPDnBis3-WuIGV_53RWqnno_k2pU",
  authDomain: "make-uplesson.firebaseapp.com",
  projectId: "make-uplesson",
  storageBucket: "make-uplesson.appspot.com",
  messagingSenderId: "336301027535",
  appId: "1:336301027535:web:4928c1d7adc17aca6847ba",
  measurementId: "G-CPKVLYKEXQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");
const signupButton = document.getElementById("sign-up");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

// create account functionalities
createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => {
        window.alert("Success! Account created.");
        window.location = "./dash.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);
      });
  }
});

// Login codes

submitButton.addEventListener("click", () => {
  email = emailInput.value;
  password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.alert("Success, Welcome Back!");
      window.location = "./dash.html";
    })
    .catch((err) => {
      // console.log(err.message);
      window.alert(err.message);
    });
});

// Login / Register Routes
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});

var name = "Evans";
console.log(name);
