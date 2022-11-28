import { React, useState } from 'react'
import './style.css'

export const UnitForm = () => {

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [points,setPoints] = useState('');
  const [quality,setQuality] = useState('');
  const [defense,setDefense] = useState('');
  const [weapons,setWeapons] = useState('');
  const [rules,setRules] = useState('')



  return(
    <>
    <h1>Unit Form</h1>
    </>
  ) 
}


