import React, { Component } from 'react'
import './style.scss';
import { Button } from '../Button';
import { InputText } from '../InputText'
import { LoginFormProps, LoginFormState } from './interface';

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    
    this.setState({
      [name]: value,
    } as unknown as LoginFormState);
  }

  handleLogIn = () => {
    const { setLoggedIn } = this.props;

    setLoggedIn(true);
  }

  render() {
    const { username, password } = this.state;
    
    return (
      <form className='login-form'>
        <InputText name={'username'} value={username} type={'text'} labelText={'Username'} hasError={false} onChange={this.handleChangeEvent} />
        <InputText name={'password'} value={password} type={'password'} labelText={'Password'} hasError={false} onChange={this.handleChangeEvent} />
        <Button className={'primary'} callback={this.handleLogIn} >Log in</Button>
      </form>
    )
  }
}
