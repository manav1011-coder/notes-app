import { useState } from 'react';
const AddNote = (props) =>{
   const[noteText,setNoteText]=useState("");
   const characterLimit=200;
   const changeHandler = (event) =>{
       if(characterLimit-event.target.value.length>=0)
       setNoteText(event.target.value);
   }
   const handleSaveClick =()=>{
       if(noteText.trim().length>0)
          props.handleAddNote(noteText);
       setNoteText("");
   }
   
    return(
        <div className="note new">
            <textarea rows='8' cols='8' placeholder="Type a new note" onChange={changeHandler} value={noteText}></textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
export default AddNote;