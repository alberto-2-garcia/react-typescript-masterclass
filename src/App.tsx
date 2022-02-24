import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserManager from './components/UserManager';
import StudentManager from './components/StudentManager'

import { StudentContextProvider, StudentContext } from './context/StudentContext';
import { StudentFilter } from './components/StudentFilter';

function App() {
  return (
    <div className='App'>
      <h1>My App</h1>
      <StudentContextProvider >
        <StudentManager />
        <StudentContext.Consumer>
          {(studentList) => (
            <>
              <StudentFilter title={'90% grade or more'} studentList={studentList.students.filter(student => student.grade >= 90)} />
              <StudentFilter title={'70% grade or less'} studentList={studentList.students.filter(student => student.grade <= 70)} />
            </>
          )}
        </StudentContext.Consumer>
      </StudentContextProvider>
      {/* <UserManager ownerName='idk' /> */}
    </div>
  );
}

export default App;
