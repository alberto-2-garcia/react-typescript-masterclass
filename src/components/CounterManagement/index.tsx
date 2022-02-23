import axios from 'axios';
import React from 'react';
import { CounterManagementState, CounterManagementProps } from './interface';

export default class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      counter: 0,
      users: []
    }
  }

  handleAddClick = () => {
    this.setState({ counter: this.state.counter + 1});
  }

  handleMinusClick = () => {
    this.setState({ counter: this.state.counter - 1});
  }

  clickWindow = () => {
    this.setState({ counter: this.state.counter + 1});
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        const data = res.data;

        const users = data.data.map((userData: any) => userData.first_name);

        this.setState({ users });
      })
    window.addEventListener('click', this.clickWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.clickWindow);
  }

  render() {
    const { ownerName } = this.props;
    const { counter, users } = this.state;
    return (
      <div>
        <h1> Counter Management </h1>
        <h2> Owner Name: {ownerName} </h2>
        <h3> Counter: {counter} </h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Minus</button>
        <ul>
          {users.map(user => <li>{user}</li>)}
        </ul>
      </div>
    )
  }
}
