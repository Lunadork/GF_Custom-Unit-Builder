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



  return(
    <>
    <h1>Unit Form</h1>
    </>
  ) 
}


