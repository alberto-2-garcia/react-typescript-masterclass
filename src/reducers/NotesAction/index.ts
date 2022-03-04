import { Reducer } from "redux";

export type Note = {
    title: string;
    body: string;
    lastModified: Date;
}

export interface NotesAction {
    type: string;
    notes: Note[];
    index?: number;
}

export const notesReducer: Reducer<Note[], NotesAction> = (state = [], action) => {
    const { notes , index: indexNote, type } = action;
    
    switch(type) {
        case "ADD_NOTES":
            return [ ...state, ...action.notes ];
        case "MODIFY_NOTES":
            const modifiedNote = notes[0];
            return state.map(((note, index) => {
                if (index == indexNote) {
                    note.body = modifiedNote.body;
                    note.title = modifiedNote.title;
                    note.lastModified = modifiedNote.lastModified;
                }
                return note;
            }));
        case "DELETE_NOTE":
            return state.filter((note, index) => index !== indexNote);
        default:
            return state;
    }
}
