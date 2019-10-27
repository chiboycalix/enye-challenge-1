import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyA5cCL7r07Qg_e6VBbvkXgntv_Am57jo54",
    authDomain: "enye-functions.firebaseapp.com",
    databaseURL: "https://enye-functions.firebaseio.com",
    projectId: "enye-functions",
    storageBucket: "enye-functions.appspot.com",
    messagingSenderId: "1020310623398",
    appId: "1:1020310623398:web:c5d3bac928c26b17135067",
    measurementId: "G-TDNTBYHQR7"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export default database;