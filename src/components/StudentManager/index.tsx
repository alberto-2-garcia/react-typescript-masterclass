import React, { Component } from 'react'
import { StudentManagerProps, StudentManagerState } from './interface';

import { InputText } from '../InputText';
import { Button } from '../Button';
import { StudentContext, StudentType } from '../../context/StudentContext';
import { UserList } from '../StudentList';

export default class UserManager extends Component<StudentManagerProps, StudentManagerState> {
  constructor(props: StudentManagerProps) {
    super(props);

    this.state = {
      name: '',
      grade: 1
    }
  }

  handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { value, name } = event.currentTarget;
    
    this.setState({
      [name]: value,
    } as unknown as StudentManagerState);
  }

  handleSumbitEvent = (event: React.FormEvent<HTMLFormElement>, updateStudent: any) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      grade: { value: number };
    };

    const name = target.name.value; // typechecks!
    const grade = target.grade.value; // typechecks!

    console.log(name, grade);
    if (name && grade) {
      updateStudent({name, grade});
      this.setState({name: '', grade: 1});
    }
  }

  render() {
    const { name, grade } = this.state;

    return (
      <div>
        <h1>Students</h1>
        <StudentContext.Consumer>
          {(studentList) => (
            <>
              <UserList students={studentList.students} />
              <form onSubmit={(event) => this.handleSumbitEvent(event, studentList.updateStudent)}>
                <InputText labelText='Student name' type='text' name='name' value={name} onChange={this.handleChangeEvent} />
                <InputText labelText='Student grade' type='number' name='grade' value={grade} onChange={this.handleChangeEvent} min={1} max={100} />
                <Button type='primary' callback={undefined} > Add student </Button>
              </form>
            </>
          )}
        </StudentContext.Consumer>
      </div>
    )
  }
}
