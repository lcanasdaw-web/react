import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NoteContext } from "../context/note.context"
import NoteCard from "../components/NoteCard"
import './NotesPage.css';
import CreateNote from "../components/CreateNote";

function NotesPage() {
  const {notes, getNotes, hasError, isLoading} = useContext(NoteContext)

  useEffect(() => {
    getNotes()
  }, [])

  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    )
  })
  return (
    <>
    <HeaderComponent></HeaderComponent >

      <section id="notes-page">
        <div>Notes</div>
        <ul className="note-list">
        <li>
          <CreateNote></CreateNote>
        </li>
        {hasError ?(
          <h2>No se pudieron cargar las notas</h2>
          ) : !isLoading ? (
            noteCards) : (
              <p>Cargando notas...</p>
            )}
        </ul>
        </section>
    </>

  )
}

export default NotesPage
