import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserManager from './components/UserManager';

function App() {
  return (
    <>
      <h1>My App</h1>
      <UserManager ownerName='idk' />
    </>
  );
}

export default App;
