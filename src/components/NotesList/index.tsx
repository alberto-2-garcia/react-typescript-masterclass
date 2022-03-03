import React, { useState } from 'react'
import { Note } from '../../reducers/NotesAction';
import { Button } from '../Button';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import Notes from '../Notes';
import { NotesListProps } from './interface';

const NotesList: React.FC<NotesListProps> = ({ openNote, handleShowModal }) => {

  const handleButtonClick = () => {
    handleShowModal('', '', -1);
  }

  return (
    <div>
      <h1>Notes</h1>
      {/* Notes list */}
      <Notes onClick={openNote} />
      <Button className={'secondary'} callback={handleButtonClick} >Add note</Button>
    </div>
  )
}

export default NotesList;
