import React from 'react';
import './style.scss';
import { NotesProps, NotesStateProps, NotesOwnProps, NoteProps, NotesDispatchProps } from './interface'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { Note } from '../../reducers/NotesAction';
import { Button } from '../Button';

const NoteComponent: React.FC<NoteProps> = ({ note, onClick }) => {
  const { title, lastModified } = note;
  // lastModified.toLocaleDateString

  const modalPreventEventPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }
  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>Last modified: {lastModified.toDateString()} {lastModified.toLocaleTimeString()}</p>
      <Button className={'primary'} callback={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        modalPreventEventPropagation(e);
        onClick();
      }} >Delete note</Button>
    </div>
  );
}

const Notes: React.FC<NotesProps> = ({ notes, onClick, deleteNote }) => {
  return (
    <div className='notes'>
      {notes.map((note, index) => (
        <div key={note.title} onClick={() => {
          onClick(note, index);
        }}>
          <NoteComponent note={note} onClick={() => {
            deleteNote(index);
          }} />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps: MapStateToProps<NotesStateProps, NotesOwnProps, Note[]> = (state, ownProps) => {
  return {
    notes: state
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<NotesDispatchProps, NotesOwnProps> = (dispatch, ownProps) => {
  return {
    deleteNote: (index) => dispatch({ type: 'DELETE_NOTE', notes: [], index })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
