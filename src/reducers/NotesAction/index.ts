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
                console.log('map', index);
                if (index == indexNote) {
                    console.log('updating')
                    note.body = modifiedNote.body;
                    note.title = modifiedNote.title;
                    note.lastModified = modifiedNote.lastModified;
                }
                return note;
            }));
        default:
            return state;
    }
}
