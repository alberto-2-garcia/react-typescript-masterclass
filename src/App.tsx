import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <h1>App</h1>
      <Button type='primary'/>
      <Button />
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
    </>
  );
}

export default App;
