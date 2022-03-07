import NotesList from './components/NotesList';
import './App.css';
import { useState} from 'react'
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';
function App() {
 const[notes,setNotes]=useState([
   {
     id:nanoid(),
     text:"Pick Up the Groceries",
     date:"21/01/2022"
   },
   {
     id:nanoid(),
    text:"Cancel gym membership",
    date:"24/01/2022"
   },
   {
     id:nanoid(),
    text:"Take the car for servicing",
    date:"29/01/2022"
   }
 ])
 const deleteNote =(id) =>{
   console.log("Chutia");
   setNotes((oldNotes) =>{
     oldNotes.filter((arrElem,index) =>{
       return index!=id;
     })
   })
 }
 const addNote =(text) =>{
      const date=new Date();
      const newNote={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
      }
      setNotes((oldItems)=>{
        return [...oldItems,newNote];
      })
 }
 const fun =(id) =>{
    const newnotes=notes.filter((note)=>note.id!==id);
    setNotes(newnotes);
 }
 const[searchText,setSearchText]=useState('');
 const[darkMode,setDarkMode]=useState(false);
 console.log(darkMode);
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header darkModeHandler={setDarkMode} />
      <Search  handleSearchNote={setSearchText}/>
      <NotesList no={notes.filter((note)=>{ return note.text.toLowerCase().includes(searchText)})} handleAddNote={addNote} delete={fun} />
    </div>
    </div>
    
  );
}

export default App;
