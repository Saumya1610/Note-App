import Noteform  from "./NoteForm"

export const NewNote = ({ onSubmit, onAddTag, availableTags })=> {
    return (
        <>
        <h1>New Note</h1>
        <Noteform onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
        </>
    )


}

export default NewNote