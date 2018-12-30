import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyCJPPtWhuRUhxKGCS5jheRid6CZLx_0oEk",
   authDomain: "catch-of-the-day-bo-e4f6f.firebaseapp.com",
   databaseURL: "https://catch-of-the-day-bo-e4f6f.firebaseio.com"
});

//rebase binding
const base = Rebase.createClass(firebaseApp.database());

//export named export
export { firebaseApp };

//this is a ddefault export
export default base;
