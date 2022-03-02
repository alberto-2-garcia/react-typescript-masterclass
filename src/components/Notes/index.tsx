import React from 'react';
import './style.scss';
import { NotesProps, NotesStateProps, NotesOwnProps, NoteProps } from './interface'
import { connect, MapStateToProps } from 'react-redux';
import { Note } from '../../reducers/NotesAction';

const NoteComponent: React.FC<NoteProps> = ({ note }) => {
  const { title, lastModified } = note;
  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>Last modified: {lastModified.toDateString()}</p>
    </div>
  );
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  console.log(notes);
  return (
    <div className='notes'>
      {notes.map(note => (
        <div key={note.title}>
          <NoteComponent note={note} />
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

export default connect(mapStateToProps)(Notes);
