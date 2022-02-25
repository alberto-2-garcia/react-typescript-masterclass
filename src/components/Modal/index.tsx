import React, { Component } from 'react'
import './styles.scss';
import { Button } from '../Button'
import { ModalProps, ModalState } from './interface'
import ReactDOM from 'react-dom';

export default class Modal extends Component<ModalProps, ModalState> {
  root: HTMLElement;
  el: HTMLElement;

  constructor(props: ModalProps) {
    super(props);

    this.root = document.getElementById('root') as HTMLElement;
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.root.append(this.el);
  }

  componentWillUnmount() {
    this.root.removeChild(this.el);
  }

  handleCloseModal = () => {
    this.props.onClick();
  }

  modalPreventEventPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  render() {
    const { title, body, onClick, show = true } = this.props;
    const modalUI = ReactDOM.createPortal((
      <div className='modal' onClick={this.modalPreventEventPropagation}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Button className='primary' callback={this.handleCloseModal}> Close model </Button>
      </div>),
      this.el
    );
    return show ? modalUI : null;
  }

}
