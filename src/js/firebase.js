// /** FirebaseJS **/
// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/messaging";
// import "firebase/storage";
// import "firebase/database";
// import "firebase/remote-config";

// /** Configure FirebaseJS **/
// const firebaseConfig = {
//     apiKey: "AIzaSyC2fSgvBKn_kfTA-YA_oNSnuv2T9IFJ1LY",
//     authDomain: "startbootstrap-dostesting.firebaseapp.com",
//     databaseURL: "https://startbootstrap-dostesting.firebaseio.com",
//     projectId: "startbootstrap-dostesting",
//     storageBucket: "startbootstrap-dostesting.appspot.com",
//     messagingSenderId: "1027318006182",
//     appId: "1:1027318006182:web:22de08214e99fee3170f67"
// };

// /** Initialize Firebase **/
// firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore();

// const docRef = firestore.doc("samples/sandwichData");
// const outputHeader = document.querySelector("#hotDogOutput");
// const inputTextField = document.querySelector("#latestHotDogStatus");
// const saveButton = document.querySelector("#saveButton");
// const loadButton = document.querySelector("#loadButton");

// saveButton.addEventListener("click", function() {
//     const textToSave = inputTextField.value;
//     console.log("I am going to save " + textToSave + " to Firestore");
//     docRef.set({
//         hotDogStatus: textToSave
//     }).then(function() {
//         console.log("Status saved!");
//     }).catch(function(error) {
//         console.log("Got an error: ", error);
//     });
// });

// loadButton.addEventListener("click", function() {
//     docRef.get().then(function(doc) {
//         if (doc && doc.exists) {
//             const myData = doc.data();
//             console.log("Check out this document I recieved");
//             outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
//         }
//     }).catch(function() {
//         console.log("Got an error: ", error);
//     });
// });

// getRealtimeUpdates = function() {
//     docRef.onSnapshot(function(doc) {
//         if (doc && doc.exists) {
//             const myData = doc.data();
//             console.log("Check out this document I recieved ", doc);
//             outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
//         }
//     });
// };

// getRealtimeUpdates();