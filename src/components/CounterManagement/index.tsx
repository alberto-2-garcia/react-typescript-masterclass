import axios from 'axios';
import React from 'react';
import { CounterManagementState, CounterManagementProps, UserData } from './interface';

export default class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      user: 1,
      userData: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
      }
    }
  }

  handleAddClick = () => {
    this.setState({ user: this.state.user + 1});
  }

  handleMinusClick = () => {
    this.setState({ user: this.state.user - 1});
  }

  fetchUserData = () => {
    axios.get(`https://reqres.in/api/users/${this.state.user}`)
    .then(res => {
      const userData = res.data.data as UserData;
      this.setState({ userData });
    })
  }

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps: CounterManagementProps, prevState: CounterManagementState) {
    console.log('hewwo')
    if (prevState.user !== this.state.user) {

      this.fetchUserData();
    }
  }

  render() {
    const { ownerName } = this.props;
    const { user, userData } = this.state;
    const { first_name } = userData;
    return (
      <div>
        <h1> Counter Management </h1>
        <h2> Owner Name: {ownerName} </h2>
        <h3> User: {user} </h3>
        <h3> {first_name} </h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Minus</button>
      </div>
    )
  }
}
