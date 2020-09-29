import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBzW-ASWeQYEHclUA9QJ_YzJB_7of6mM2s',
  authDomain: 'react-netflix-clone-ba05b.firebaseapp.com',
  databaseURL: 'https://react-netflix-clone-ba05b.firebaseio.com',
  projectId: 'react-netflix-clone-ba05b',
  storageBucket: 'react-netflix-clone-ba05b.appspot.com',
  messagingSenderId: '368550474602',
  appId: '1:368550474602:web:d679a22d0b257fa22a2b13',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
