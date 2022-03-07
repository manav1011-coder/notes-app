import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = (props) =>{
  
  return(
      <div className="notes-list">
        {
          props.no.map((noteElem) =>{
              return(
                <Note id={noteElem.id} text={noteElem.text} date={noteElem.date} delete={props.delete} />
                
              )
            
          })
        }
        <AddNote handleAddNote={props.handleAddNote} />
    </div>
  )
}
export default NotesList;