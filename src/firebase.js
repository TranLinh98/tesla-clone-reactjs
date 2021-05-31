import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDHH0gCT4jAQWxBSBOiFk0LzbD9Wo6DVLU',
  authDomain: 'tesla-clone-263a9.firebaseapp.com',
  projectId: 'tesla-clone-263a9',
  storageBucket: 'tesla-clone-263a9.appspot.com',
  messagingSenderId: '915933125616',
  appId: '1:915933125616:web:4ffe784aaac8dd87d09b35',
  measurementId: 'G-5R7PP3V5F0',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
