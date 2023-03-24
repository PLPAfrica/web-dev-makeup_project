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
// const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");
const signupButton = document.getElementById("sign-up");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

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
