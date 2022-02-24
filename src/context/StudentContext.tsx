import React from "react";

export interface StudentContextType {
  students: StudentType[];
  updateStudent(user: StudentType): any;
}

export interface StudentType {
  name: string;
  grade: number;
}

export const StudentContext = React.createContext<StudentContextType>({
  students: [],
  updateStudent:() => {}
});

interface StudentContextProviderState {
  students: StudentType[];
}

export class StudentContextProvider extends React.Component<{}, StudentContextProviderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      students: []
    }
  }

  handleUpdateUser = (student: StudentType) => {
    this.setState({
      students: [ ...this.state.students, student ]
    });
  }

  render() {
    return (
      <StudentContext.Provider value={{
        students: this.state.students,
        updateStudent: this.handleUpdateUser
      }}>
        {this.props.children}
      </StudentContext.Provider>
    )
  }
}
