import { Reducer } from "redux";

export type Note = {
    title: string;
    body: string;
    lastModified: Date;
}

export interface NotesAction {
    type: string;
    notes: Note[];
}

export const notesReducer: Reducer<Note[], NotesAction> = (state = [], action) => {
    switch(action.type) {
        case "ADD_NOTE":
            return [ ...state, ...action.notes ];
        default:
            return state;
    }
}
