import { React, useState } from 'react'
import './style.css'

export const WeaponForm = () => {
  
  
  
  const calcWeaponPoints = (e) => {
    e.preventDefault()
  }
  
  
    return (
    <>
    
        <form className='groupForm' onSubmit={calcWeaponPoints}>

        <label htmlFor="weaponName" className="groupLabel">Name</label>
        <input id ="weaponName" className="groupInput" type = "text" placeholder = "Name"></input>

        <label htmlFor="range" className="groupLabel">Range</label>
        <input id ="range" className="groupInput" type = "number" placeholder = "Range"></input>

        <label htmlFor="attacks" className="groupLabel">Attacks</label>
        <input id ="attacks" className="groupInput" type = "number" placeholder = "Attacks"></input>

        <label htmlFor="ap" className="groupLabel">AP</label>
        <input id ="ap" className="groupInput" type = "number" placeholder = "AP"></input>

        <input className='groupSubmitbtn' type='submit' value='Calculate points' />

        </form>

    </>

  )
}
