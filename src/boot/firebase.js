// import something here
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
export default async ({ Vue }) => {
  // something to do

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyAjPrEnYbmvQc-6nZKBAK_Ux2TLNsB9dVs',
    authDomain: 'tolis-pst.firebaseapp.com',
    databaseURL: 'https://tolis-pst.firebaseio.com',
    projectId: 'tolis-pst',
    storageBucket: 'tolis-pst.appspot.com',
    messagingSenderId: '382657951544',
    appId: '1:382657951544:web:28b0071b120322e332f3cd',
    measurementId: 'G-ZDH2PVKF8X'
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
  // var db = firebase.firestore()
  Vue.prototype.$firebase = firebase
  // Vue.prototype.$db = db
}
