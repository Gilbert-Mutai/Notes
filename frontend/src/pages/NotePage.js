import React,{useState,useEffect} from 'react'

import { useParams } from 'react-router-dom';

const NotePage = () => {

    let { id } = useParams();

    let [note, setNote] = useState(null)

  let getNote = async () => {

      let response = await fetch(`/api/notes/${id}/`)
      let data = await response.json()
      setNote(data)
  }

  useEffect(() => {

    getNote()
}, [id])

    
    console.log(note)
 
  return (
    <div>
      Now showing post {id}
     
      {note.body}
    </div>
  )
}

export default NotePage