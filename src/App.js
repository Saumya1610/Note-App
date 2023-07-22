
import './App.css';
import { Route,Routes,Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { Container } from "react-bootstrap";
import NewNote from './components/NewNote';
import {useLocalStorage} from './UseLocalStorage';
import { v4 as uuidV4 } from "uuid";
import  NoteList  from './components/NoteList';
import  {NoteLayout}  from './components/NoteLayout';
import  Note  from './components/Note';
import  {EditNote}  from './components/EditNote';
import DateTime from './components/Date';
import  DateRange  from './components/DateRange';
// eslint-disable-next-line no-undef
import { __rest } from 'tslib';
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';
import ForgotPass from './components/ForgotPass';
import About from './components/About';
function App() {


  const [notes, setNotes] = useLocalStorage("NOTES", [])
  const [tags, setTags] = useLocalStorage("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
        return Object.assign(Object.assign({}, note), { tags: tags.filter(tag => note.tagIds.includes(tag.id)) })
    })
  },[notes, tags]);

  function onCreateNote(_a) {
    var { tags } = _a, data = __rest(_a, ["tags"]);
    setNotes(prevNotes => {
        return [
            ...prevNotes,
            Object.assign(Object.assign({}, data), { id: uuidV4(), tagIds: tags.map(tag => tag.id) }),
        ];
    }); 
}

function onUpdateNote(id, { tags, ...data }) {
  setNotes((prevNotes) => {
    return prevNotes.map((note) => {
      if (note.id === id) {
        return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
      } else {
        return note;
      }
    });
  });
}

function onDeleteNote(id) {
  setNotes((prevNotes) => {
    return prevNotes.filter((note) => note.id !== id);
  });
}

function addTag(tag) {
  setTags((prev) => [...prev, tag]);
}

function updateTag(id, label) {
  setTags((prevTags) => {
    return prevTags.map((tag) => {
      if (tag.id === id) {
        return { ...tag, label };
      } else {
        return tag;
      }
    });
  });
}

function deleteTag(id) {
  setTags((prevTags) => {
    return prevTags.filter((tag) => tag.id !== id);
  });
}


  return (
   

<Container className='my-4'>
      <Routes>

<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/forgotpassword' element={<ForgotPass/>}/>
<Route path='/home' element={<Main/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/' element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }/>
<Route path='/new' element={
              <NewNote 
                onSubmit={onCreateNote} 
                onAddTag={addTag}
                availableTags={tags}
              />
            }/>
<Route path='/:id' element={<NoteLayout notes={notesWithTags} />}>
              <Route index element={<Note onDelete={onDeleteNote} />} />
              <Route path="edit" element={
               <EditNote
                 onSubmit={onUpdateNote}
                 onAddTag={addTag}
                 availableTags={tags}
                />}
              />
</Route>
<Route path='*' element={<Navigate to='/'/>}/>
</Routes>
</Container>
  
  );
}

export default App;
