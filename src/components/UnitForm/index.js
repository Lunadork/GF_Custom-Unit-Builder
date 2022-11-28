import { React, useState } from 'react'
import './style.css'

export const UnitForm = () => {

  const [name,setName] = useState('New Unit Name');
  const [description,setDescription] = useState('Description/Notes');
  const [points,setPoints] = useState(0);
  const [quality,setQuality] = useState(6);
  const [defense,setDefense] = useState(6);
  const [weapons,setWeapons] = useState([]);
  const [rules,setRules] = useState([])

  const calcPoints = (e) => {
    
  }


  return(
    <>
    <h1>Unit Form</h1>
    <form  className='groupForm'  onSubmit={calcPoints}>

    <input className='groupInput' type = 'text' placeholder='New Unit Name' onChange={(e) => setName(e.target.value)}/>
    <input className='groupInput' type = 'text' placeholder='Description/Notes' onChange={(e) => setDescription(e.target.value)}/>
    <input className='groupInput' type = 'number' placeholder='Quality' onChange={(e) => setQuality(e.target.value)}/>
    <input className='groupInput' type = 'number' placeholder='Defense' onChange={(e) => setDefense(e.target.value)}/>
    <input className='groupSubmitbtn' type='submit' value='Calculate points' />
    </form>
    </>
  ) 
}


