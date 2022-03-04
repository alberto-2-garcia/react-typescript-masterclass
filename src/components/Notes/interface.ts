import { Note } from "../../reducers/NotesAction";

export interface NoteProps {
  note: Note,
  onClick(): void;
};

export interface NotesOwnProps {
  onClick(note: Note, index: number): void;
}

export interface NotesStateProps {
  notes: Note[];
}

export interface NotesDispatchProps {
  deleteNote(index: number): any;
}

export type NotesProps = NotesOwnProps & NotesStateProps & NotesDispatchProps;
