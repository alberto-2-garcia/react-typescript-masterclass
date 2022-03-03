import { Note } from "../../reducers/NotesAction";

export interface NotesListProps {
  openNote(note: Note, index: number): void;
  handleShowModal(title: string, content: string, index: number): void;
}

