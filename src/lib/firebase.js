import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAf8rJqbViS8IumsRmdUW_VaBM2hYie0kM',
    authDomain: 'withai-185a8.firebaseapp.com',
    projectId: 'withai-185a8',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
