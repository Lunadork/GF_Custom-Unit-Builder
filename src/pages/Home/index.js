import React from 'react'
import { Button } from '../../components/Button/index'

export const Home = () => {
  return (
    <>
      <div className="App">
        <section className='landingSection'>
          <h1 className='card justify-content-center'>Grimdark Future Custom Unit creator</h1>
          <h4 className='card'>Please contribute to the One Page Rules patreon</h4>
            
          <Button path = '/new' value ='Create a new Unit'/>

          <br></br>

          <a className= 'btn btn-primary mb-3'>
            <p>Visit the One Page Rules website</p>
          </a>

          <br></br>

          <a className= 'btn btn-primary mb-3'>
            <p>Visit the One Page Rules Patreon</p>
          </a>

        
      </section>
    </div>
    </>

  )
}
