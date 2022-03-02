import React, { Component } from 'react'
import { Button } from '../Button';
import Modal from '../Modal';
import { HomeProps, HomeState } from './interface'

const messages = [
  'Today is Sunday',
  'Today is Monday',
  'Today is Tuesday',
  'Today is Wednesday',
  'Today is Thursday',
  'Today is Friday',
  'Today is Saturday',
]

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      showModal: false,
      message: messages[new Date().getDay()]
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    const { showModal, message } = this.state;

    return (
      <>
        <h1>Home</h1>
        <Button className='primary' callback={this.handleShowModal}>Show message</Button>
        <Modal 
          show={showModal}
          title='Message of the day'
          onClick={this.handleCloseModal}
        >
          <p>
            {message}
          </p>
        </Modal>
      </>
    )
  }
}
