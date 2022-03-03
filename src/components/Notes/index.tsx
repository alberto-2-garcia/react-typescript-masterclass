import React from 'react';
import './style.scss';
import { NotesProps, NotesStateProps, NotesOwnProps, NoteProps, NotesDispatchProps } from './interface'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { Note } from '../../reducers/NotesAction';

const NoteComponent: React.FC<NoteProps> = ({ note }) => {
  const { title, lastModified } = note;
  // lastModified.toLocaleDateString
  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>Last modified: {lastModified.toDateString()} {lastModified.toLocaleTimeString()}</p>
    </div>
  );
}

const Notes: React.FC<NotesProps> = ({ notes, onClick }) => {
  return (
    <div className='notes'>
      {notes.map((note, index) => (
        <div key={note.title} onClick={() => {
          onClick(note, index);
          console.log('note onclick');
        }}>
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

const mapDispatchToProps: MapDispatchToPropsFunction<NotesDispatchProps, NotesOwnProps> = (dispatch, ownProps) => {
  return {
    addNotes: (notes) => dispatch({ type: 'ADD_FRUITS', notes })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
