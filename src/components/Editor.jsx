import {useState,useRef} from 'react'
import { Form} from 'react-bootstrap';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        // options here
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script:  "sub" }, { script:  "super" }],
          ["blockquote", "code-block"],
          [{ list:  "ordered" }, { list:  "bullet" }],
          [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
          ["link", "image", "video"],
          ["clean"],
    ]
  }

const Editor = () => {
    const [value, setValue] =  useState("");
    console.log(value);
    const markdownRef = useRef(null)
    const styles = {
        margin:'1px',
        padding:'5px',
        height:"300px"

    }
  return (
    <>
    <ReactQuill  modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here.. "  style={styles}>
    </ReactQuill>
    </>
  )
}

export default Editor;