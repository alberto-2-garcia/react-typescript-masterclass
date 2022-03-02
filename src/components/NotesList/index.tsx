import React, { useState } from 'react'
import { createStore } from 'redux';
import { Note, notesReducer } from '../../reducers/NotesAction';
import { Button } from '../Button';
import { Provider } from 'react-redux';
import Notes from '../Notes';
import Modal from '../Modal';

const note: Note = {
  title: 'Note title',
  body: 'Note body',
  lastModified: new Date()
}

const store = createStore(notesReducer, [note]);

export default function NotesList() {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleShowModal = () => {
    setShowModal(true);
  }

  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Notes</h1>
          {/* Notes list */}
          <Notes />
          <Button className={'secondary'} callback={handleShowModal} >Add note</Button>
        </div>
      </Provider>
      <Modal 
          show={showModal}
          title='Message of the day'
          onClick={handleCloseModal}
        >
          <p> Modal </p>
        </Modal>
    </>
  )
}
