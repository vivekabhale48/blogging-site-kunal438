let firebaseConfig = {
    apiKey: "AIzaSyAe86gJcSzH0ePu-eYqP7G8PisWI2JAEwU",
    authDomain: "blogging-site-kunal438.firebaseapp.com",
    projectId: "blogging-site-kunal438",
    storageBucket: "blogging-site-kunal438.appspot.com",
    messagingSenderId: "27978097899",
    appId: "1:27978097899:web:5e41179f8d650c32c9caae",
    measurementId: "G-CWEX64D0LD"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();