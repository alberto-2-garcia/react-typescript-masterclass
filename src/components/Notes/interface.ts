import { Note } from "../../reducers/NotesAction";

export interface NoteProps {
  note: Note
};

export interface NotesOwnProps {
  onClick(note: Note, index: number): void;
}

export interface NotesStateProps {
  notes: Note[];
}

export interface NotesDispatchProps {
  addNotes(notes: Note[]): any;
}

export type NotesProps = NotesOwnProps & NotesStateProps & NotesDispatchProps;
