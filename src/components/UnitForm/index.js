import { React, useState } from 'react'
import './style.css'
const { pointCalculator } = require('../../handlers/pointCalculator');


export const UnitForm = () => {

  const [name,setName] = useState('New Unit Name');
  const [description,setDescription] = useState('Description/Notes');
  const [points,setPoints] = useState(0);
  const [quality,setQuality] = useState(6);
  const [defense,setDefense] = useState(6);
  const [models,setModels] = useState(1);
  const [weapons,setWeapons] = useState([]);
  const [rules,setRules] = useState([])
  

  const calcPoints = (e) => {
    
    e.preventDefault();

    if (!name || !description || !quality || !defense || !models) return alert("Please fill all fields");

    if (quality <= 0 || quality > 6 ) return alert("Quality value invalid, only a number between 1 and 6 can be used");

    if (defense <= 0 || defense > 6 ) return alert("Quality value invalid, only a number between 1 and 6 can be used");

    if (models <=0 ) return alert("Cannot have less than one model per unit");

    let unit = { quality: quality, defense : defense, weapons : weapons, rules: rules, models: models, name: name, description : description, points : points};

    const result = pointCalculator(unit);

    //make better later
    alert("Points cost: " + result);

  }


  return(
    <>
    <h1>Unit Form</h1>
    <form  className='groupForm'  onSubmit={calcPoints}>

    <input className='groupInput' type = 'text' placeholder='New Unit Name' onChange={(e) => setName(e.target.value)}/>
    <input className='groupInput' type = 'text' placeholder='Description/Notes' onChange={(e) => setDescription(e.target.value)}/>
    <input className='groupInput' type = 'number' placeholder='Quality' onChange={(e) => setQuality(e.target.value)}/>
    <input className='groupInput' type = 'number' placeholder='Defense' onChange={(e) => setDefense(e.target.value)}/>
    <input className='groupInput' type = 'number' placeholder='Models per unit' onChange={(e) => setModels(e.target.value)}/>
    <input className='groupSubmitbtn' type='submit' value='Calculate points' />
    </form>
    </>
  ) 
}


