import { Note } from "../../reducers/NotesAction";

export interface NotesFormOwnProps {
  title: string;
  content: string;
  noteIndex: number;
  handleCloseModal(): void;
  handleTitleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export interface NotesFormDispatchProps {
  addNotes(notes: Note[]): any;
  modifyNote(note: Note, index: number): any;
}

export type NotesFormProps = NotesFormOwnProps & NotesFormDispatchProps;

