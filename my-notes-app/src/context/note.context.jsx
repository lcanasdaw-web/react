import { createContext, useState } from "react";

const NoteContext = createContext();

const API_URL="https://ca905be1a7a1fbcabc27.free.beeceptor.com/api/notes";

function NoteProviderWrapper(props){
const [notes, setNotes] = useState([]);
const [hasError, setHasError] = useState(false);
const [isLoading, setIsLoading] = useState(false);

    const getNotes = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setNotes(data.reverse());
            setHasError(false);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setHasError(true);
            setIsLoading(false);
        }
    }

    const addNote = async (newNote) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote)
            })
        setNotes([newNote, ...notes]);
        } catch (e) {
            console.log(e);
        }
        
    }

    const updateNote = (updateNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id !== updateNote.id) return note
            return updateNote
        })

        setNotes(updatedNotes);
    }


    return (
        <NoteContext.Provider value={{notes, hasError, isLoading, setNotes, getNotes, addNote, updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export {NoteContext, NoteProviderWrapper}