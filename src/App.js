import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

import UserSelect from './components/UserSelect';
import ChatStream from './components/ChatStream';

firebase.initializeApp({
  apiKey: "AIzaSyAIpvlFZZ9385eVtMnVSbLh68Rz3OceDLE",
  authDomain: "guild-chat-f102b.firebaseapp.com",
  projectId: "guild-chat-f102b",
  storageBucket: "guild-chat-f102b.appspot.com",
  messagingSenderId: "741059260221",
  appId: "1:741059260221:web:3e4dba35922bbe469f5f54",
  measurementId: "G-MEWFS4RG0J"
});

const firestore = firebase.firestore();

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Guild Chat</h1>
        <UserSelect firestore={firestore} />
      </header>
      <ChatStream firestore={firestore} />
    </div>
  );
}

export default App;
