import React from 'react'
import noteimg from './images/notes.png'

function Sidebar() {
  return (
    <>
  
  <div className="sidebar">
  <div className="notes">Notes App</div>
  <div className="note" ><img className="img1" src={noteimg}/>&nbsp; &nbsp;Notes</div>
</div>

    </>
  )
}

export default Sidebar