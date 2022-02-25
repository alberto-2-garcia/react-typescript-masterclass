import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserManager from './components/UserManager';
import StudentManager from './components/StudentManager'

import { StudentContextProvider, StudentContext } from './context/StudentContext';
import { StudentFilter } from './components/StudentFilter';
import { ButtonGroup } from './components/ButtonGroup';
import { Button } from './components/Button';
import Modal from './components/Modal';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      {/* <h1>My App</h1> */}
      <Home />
      
      {/* <div>
        <h1>Primary</h1>
        <ButtonGroup flexDirection='row' btnsClass='primary'>
          <Button className='primary' callback={undefined} >Yes</Button>
        </ButtonGroup>
      </div>

      <div>
        <h1>Secondary</h1>
        <ButtonGroup flexDirection='row' btnsClass='secondary'>
          <Button className='secondary' callback={undefined} >Yes</Button>
        </ButtonGroup>
      </div>

      <div>
        <h1>Button group</h1>
        <ButtonGroup flexDirection='column' btnsClass='black'>
          <Button className='secondary' callback={undefined} >Yes</Button>
          <Button className='secondary' callback={undefined} >No</Button>
        </ButtonGroup>
      </div> */}
      {/* <StudentContextProvider >
        <StudentManager />
        <StudentContext.Consumer>
          {(studentList) => (
            <>
              <StudentFilter title={'90% grade or more'} studentList={studentList.students.filter(student => student.grade >= 90)} />
              <StudentFilter title={'70% grade or less'} studentList={studentList.students.filter(student => student.grade <= 70)} />
            </>
          )}
        </StudentContext.Consumer>
      </StudentContextProvider> */}
      {/* <UserManager ownerName='idk' /> */}
    </div>
  );
}

export default App;
