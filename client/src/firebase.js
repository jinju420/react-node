import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAdqKCVxLLoOhFMuatlgPaGO6VcQl3ej4Y',
	authDomain: 'react-project-ba468.firebaseapp.com',
	projectId: 'react-project-ba468',
	storageBucket: 'react-project-ba468.appspot.com',
	messagingSenderId: '1032476498509',
	appId: '1:1032476498509:web:0caa063e3da0f1ad215a04',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
