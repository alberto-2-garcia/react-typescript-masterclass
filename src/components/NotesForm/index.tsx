import React from 'react'
import { connect, MapDispatchToPropsFunction } from 'react-redux'
import { Button } from '../Button'
import { InputText } from '../InputText'
import { TextArea } from '../TextArea'
import { NotesFormProps, NotesFormOwnProps, NotesFormDispatchProps } from './interface'

const NotesForm: React.FC<NotesFormProps> = ({ title, content, noteIndex, handleContentChange, handleTitleChange, addNotes, modifyNote, handleCloseModal }) => {
  const handleButtonClick = () => {
    let note = {
      title,
      body: content,
      lastModified: new Date()
    }
    if (noteIndex > -1) {
      modifyNote(note, noteIndex);
    } else {
      addNotes([note]);
    }
    handleCloseModal();
  }

  console.log("form", noteIndex);
  return (
    <div>
      <InputText name={'note-title'} value={title} type={'text'} labelText={'Note title'} hasError={false} onChange={handleTitleChange} />
      <TextArea name={'note-content'} value={content} labelText={'Note content'} hasError={false} onChange={handleContentChange} />
      <Button className={'secondary'} callback={handleButtonClick}> {noteIndex > -1 ? 'Modify note' : 'Add note'} </Button>
    </div>
  )
}

const mapDispatchToProps: MapDispatchToPropsFunction<NotesFormDispatchProps, NotesFormOwnProps> = (dispatch, ownProps) => {
  return {
    addNotes: (notes) => dispatch({ type: 'ADD_NOTES', notes }),
    modifyNote: (note, index) => dispatch({ type: 'MODIFY_NOTES', notes: [note], index})
  }
}

export default connect(null, mapDispatchToProps)(NotesForm);

// export default NotesForm;
