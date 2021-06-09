import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

import UserSelect from './components/UserSelect';
import ChatStream from './components/ChatStream';
import ChatForm from './components/ChatForm';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUserId: '2222',
    }
  }

  toggleCurrentUserId = () => {
    this.setState({ currentUserId: this.state.currentUserId === '1111' ? '2222' : '1111' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Guild Chat</h1>
          <UserSelect toggleCurrentUserId={this.toggleCurrentUserId} />
        </header>
        <ChatStream firestore={firestore} currentUserId={this.state.currentUserId} />
        <ChatForm firestore={firestore} currentUserId={this.state.currentUserId} />
      </div>
    );
  }
}

export default App;
