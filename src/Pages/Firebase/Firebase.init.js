import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitialize = () => {
    initializeApp(firebaseConfig); 
}
export default firebaseInitialize; 
 








// cnonst firebaseConfig = {
//     apiKey: "AIzaSyBQu1eJd1OxT4u_sxb1GRJCjLC8I7weRnw",
//     authDomain: "ana-car-gerez.firebaseapp.com",
//     projectId: "ana-car-gerez",
//     storageBucket: "ana-car-gerez.appspot.com",
//     messagingSenderId: "233722762573",
//     appId: "1:233722762573:web:cf7697c04ad9bb066f9304"
//   };
// export default firebaseCofig;  