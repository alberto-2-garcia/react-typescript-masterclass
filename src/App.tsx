import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserManager from './components/UserManager';
import StudentManager from './components/StudentManager'

function App() {
  return (
    <div className='App'>
      <h1>My App</h1>
      <StudentManager />
      {/* <UserManager ownerName='idk' /> */}
    </div>
  );
}

export default App;
