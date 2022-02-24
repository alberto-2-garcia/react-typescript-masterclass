import React, { Component } from 'react'
import { StudentManagerProps, StudentManagerState } from './interface';

import { InputText } from '../InputText';
import { Button } from '../Button';

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

  handleSumbitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      grade: { value: number };
    };

    const name = target.name.value; // typechecks!
    const grade = target.grade.value; // typechecks!

    console.log(name, grade);
  }

  render() {
    const { name, grade } = this.state;

    return (
      <div>
        <h1>Students</h1>
        <form onSubmit={this.handleSumbitEvent}>
          <InputText labelText='Student name' type='text' name='name' value={name} onChange={this.handleChangeEvent} />
          <InputText min={1} max={100} labelText='Student grade' type='number' name='grade' value={grade} onChange={this.handleChangeEvent} />
          <Button type='primary' callback={undefined} > Add student </Button>
        </form>
      </div>
    )
  }
}
