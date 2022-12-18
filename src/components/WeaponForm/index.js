import { React, useState } from 'react'
import './style.css'
const {weaponCostCalculator} = require('../../handlers/weaponHandler/weaponCostCalculator')




export const WeaponForm = () => {
  
  const [name,setName] = useState('New Weapon Name');
  const [range,setRange] = useState(12);
  const [attacks,setAttacks] = useState(1);
  const [ap,setAp] = useState(0);
  const [points,setPoints] = useState(0);
  
  const calcWeaponPoints = (e) => {
    e.preventDefault()

    setPoints(weaponCostCalculator({name,range,attacks,ap}));

  }
  
  
    return (
    <>
    
        <form className='groupForm' onSubmit={calcWeaponPoints}>

        <label htmlFor="weaponName" className="groupLabel">Name</label>
        <input id ="weaponName" className="groupInput" type = "text" placeholder = "Name" onChange={(e) => setName(e.target.value)}></input>

        <label htmlFor="range" className="groupLabel">Range</label>
        <input id ="range" className="groupInput" type = "number" placeholder = "Range" onChange={(e) => setRange(e.target.value)}></input>

        <label htmlFor="attacks" className="groupLabel">Attacks</label>
        <input id ="attacks" className="groupInput" type = "number" placeholder = "Attacks" onChange={(e) => setAttacks(e.target.value)}></input>

        <label htmlFor="ap" className="groupLabel">AP</label>
        <input id ="ap" className="groupInput" type = "number" placeholder = "AP" onChange={(e) => setAp(e.target.value)}></input>

        <input className='groupSubmitbtn' type='submit' value='Calculate points' />

        <p>points: {points}</p>

        </form>

    </>

  )
}
