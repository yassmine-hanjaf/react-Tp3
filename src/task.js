import React, { useState } from 'react'

export default function Task({txt,delf}) {
   
  return (
    <div>
       <input type="text" value={txt}/>&nbsp;&nbsp;
       <button className='btn btn-danger' value="supprimer"  onClick={delf} >supprimer</button><br /><br />
    </div>
  )
}