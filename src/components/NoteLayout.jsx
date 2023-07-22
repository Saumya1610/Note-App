import { Navigate, Outlet, useParams , useOutletContext} from "react-router-dom";
import Note from "./Note";

export const NoteLayout = ({ notes }) => {
    const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
    
}

export const useNote = ()=> {
    return useOutletContext(Note);
}


//export { NoteLayout,useNote} ;