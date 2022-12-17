import { React, useState } from 'react'
import './style.css'
import { WeaponForm } from '../index'
const { pointCalculator } = require('../../handlers/pointCalculator');
const {weaponCostCalculator} = require('../../handlers/weaponHandler/weaponCostCalculator')


export const UnitForm = () => {

  //unit
  const [name,setName] = useState('New Unit Name');
  const [description,setDescription] = useState('Description/Notes');
  const [points,setPoints] = useState(0);
  const [quality,setQuality] = useState(6);
  const [defense,setDefense] = useState(6);
  const [models,setModels] = useState(1);

  //weapons
  const [weapons,setWeapons] = useState([]);

  //rules
  const [rules,setRules] = useState([])
  

  const calcPoints = (e) => {
    
    e.preventDefault();

    if (!name || !description || !quality || !defense || !models) return alert("Please fill all fields");

    if (quality <= 1 || quality > 6 ) return alert("Quality value invalid, only a number between 2 and 6 can be used");

    if (defense <= 1 || defense > 6 ) return alert("Quality value invalid, only a number between 2 and 6 can be used");

    if (models <=0 ) return alert("Cannot have less than one model per unit");

    let unit = { quality: parseInt(quality), defense : parseInt(defense), weapons : weapons, rules: rules, models: parseInt(models), name: name, description : description, points : points};

    console.log(unit)

    const result = pointCalculator(unit);

    setPoints(result.unitTotal)

    //make better later
  }

  const calcWeaponPoints = (e) => {
    e.preventDefault();

    //TODO
  }


  //Do proper styling later
  return(
    <>
    <h1>Unit Form</h1>
    <form  className='groupForm'  onSubmit={calcPoints}>

      <label htmlFor="name" className="groupLabel">Name:  </label>
      <input id="name" className='groupInput' type = 'text' placeholder='New Unit Name' onChange={(e) => setName(e.target.value)}/>

      <br></br>

      <label htmlFor="desc" className="groupLabel">Description:  </label>
      <input id="desc" className='groupInput' type = 'text' placeholder='Description/Notes' onChange={(e) => setDescription(e.target.value)}/>

      <br></br>

      <label htmlFor="quality" className="groupLabel">Quality:  </label>
      <input id="quality" className='groupInput' type = 'number' placeholder='Quality' onChange={(e) => setQuality(e.target.value)}/>

      <br></br>

      <label htmlFor="defense" className="groupLabel">Defense:  </label>
      <input id="defense" className='groupInput' type = 'number' placeholder='Defense' onChange={(e) => setDefense(e.target.value)}/>

      <br></br>

      <label htmlFor="models" className="groupLabel">Models Per Unit:  </label>
      <input id="models" className='groupInput' type = 'number' placeholder='Models per unit' onChange={(e) => setModels(e.target.value)}/>

      <br></br>

      <input className='groupSubmitbtn' type='submit' value='Calculate points' />
    </form>

    <br></br>
    <br></br>

    <WeaponForm/>

    <label htmlFor="points" className="pointsLabel">Points cost: </label>
    <p id="points" className="pointsP">{points}</p>
    <br></br>
    <br></br>


    
    </>
  ) 
}


