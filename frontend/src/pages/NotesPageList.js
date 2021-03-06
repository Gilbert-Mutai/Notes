import React,{useState,useEffect} from 'react'

import ListItem from '../components/ListItem'

const NotesPageList = () => {

  let [notes,setNotes] =useState([])

  let getNotes = async()=>{
    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  } 

  useEffect(()=>{
    getNotes()

  },[])

  return (
    
    <div>
  

      <div className="notes-list">
        {notes.map((note,index)=>(

          <ListItem key={index} note={note}/>
         
        )     
        )}


      </div>

    </div>
  )
}

export default NotesPageList