import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: 'AIzaSyBmvf6ET4re72L6mSHbSQSuXG6XPSGxOGk',
    authDomain: 'twitter-clone-fc841.firebaseapp.com',
    databaseURL: 'https://twitter-clone-fc841.firebaseio.com',
    projectId: 'twitter-clone-fc841',
    storageBucket: '',
    messagingSenderId: '47981543161'
});

render(<App />, document.getElementById('root'))