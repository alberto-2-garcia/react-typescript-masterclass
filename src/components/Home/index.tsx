import React, { Component } from 'react'
import { Button } from '../Button';
import Modal from '../Modal';
import { HomeProps, HomeState } from './interface'

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      showModal: true
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    const { showModal } = this.state;
    return (
      <>
        <h1>Home</h1>
        <Button className='primary' callback={this.handleShowModal}>Show message</Button>
        <Modal 
          show={showModal}
          title='Modal title'
          body='Modal body text'
          onClick={this.handleCloseModal}
        />
      </>
    )
  }
}
