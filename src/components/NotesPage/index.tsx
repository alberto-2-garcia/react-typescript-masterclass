import React, { useState } from 'react'
import { createStore } from 'redux';
import { Note, notesReducer } from '../../reducers/NotesAction';
import { Provider } from 'react-redux';
import Modal from '../Modal';
import NotesList from '../NotesList';
import NotesForm from '../NotesForm';

const note: Note = {
  title: 'Note title',
  body: 'Note body',
  lastModified: new Date()
}

const store = createStore(notesReducer, [note]);

export default function NotesPage() {

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [noteIndex, setNoteIndex] = useState(-1);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleShowModal = (title: string, content: string, index: number) => {
    populateModal(title, content, index);
    setShowModal(true);
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTitle(value);
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setContent(value);
  }

  const openNote = (note: Note, index: number) => {
    const { title, body } = note;
    handleShowModal(title, body, index);
  }

  const populateModal = (title: string, content: string, index: number) => {
    setTitle(title);
    setContent(content);
    setNoteIndex(index);
  }

  return (
    <>
      <Provider store={store}>
        <NotesList openNote={openNote} handleShowModal={handleShowModal}/>
        <Modal 
          show={showModal}
          title='Message of the day'
          onClick={handleCloseModal}
        >
          <NotesForm
            title={title}
            content={content}
            noteIndex={noteIndex}
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      </Provider>
    </>
  )
}
