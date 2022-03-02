import { Note } from "../../reducers/NotesAction";

export interface NoteProps {
  note: Note
};

export interface NotesOwnProps {}

export interface NotesStateProps {
  notes: Note[];
}

export type NotesProps = NotesOwnProps & NotesStateProps;
