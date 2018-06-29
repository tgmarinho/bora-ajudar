import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyC4W7gXT9v4TmmusMNHTlrpIgiI-_OvIY8',
    authDomain: 'bora-ajudar-tg.firebaseapp.com',
    databaseURL: 'https://bora-ajudar-tg.firebaseio.com',
    projectId: 'bora-ajudar-tg',
    storageBucket: '',
    messagingSenderId: '818091840848'
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())

export default base