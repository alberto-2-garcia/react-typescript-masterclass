import axios from 'axios';
import React from 'react';
import { UserManagerState, UserManagerProps, UserData } from './interface';
import { Button } from '../Button';
import { UserInfo } from '../UserInfo';

export default class UserManager extends React.Component<UserManagerProps, UserManagerState> {
  constructor(props: UserManagerProps) {
    super(props);

    this.state = {
      user: 1,
      users: []
    }
  }

  handleAddClick = () => {
    const user = this.state.user;
    if (user < 10) {
      this.setState({ user: user + 1});
    }
  }

  handleMinusClick = () => {
    const user = this.state.user;
    if (user > 1) {
      this.setState({ user: user - 1});
    }
  }

  getUserData = async (number: number) => {
    return await axios.get(`https://reqres.in/api/users?page=${number}`)
  }

  fetchUserData = async () => {
    const responses = await Promise.all([this.getUserData(1), this.getUserData(2)]);
    
    const users1 = responses[0].data.data;
    const users2 = responses[1].data.data;
    let result: UserData[] = [];

    result = [...users1, ...users2];
    this.setState({ users: result });
  }

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps: UserManagerProps, prevState: UserManagerState) {
    console.log('hewwo')
    // if (prevState.user !== this.state.user) {
    //   this.fetchUserData();
    // }
  }

  render() {
    const { ownerName } = this.props;
    const { user, users } = this.state;
    // const { first_name } = userData;
    return (
      <div>
        <h1> Counter Management </h1>
        <h2> Owner Name: {ownerName} </h2>
        <h3> User: {user} </h3>
        <Button callback={this.handleAddClick} type='primary'>Add</Button>
        <Button callback={this.handleMinusClick} type='secondary'>Minus</Button>
        {users.slice(0, user).map((user, index) => (
          <UserInfo key={index} user={user} />
        ))}
      </div>
    )
  }
}
