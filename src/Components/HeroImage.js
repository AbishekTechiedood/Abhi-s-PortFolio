import React from 'react'
import '../Components/HeroimageStyle.css'
import HeroImg from '../Images/heropage.png'
import { Link } from 'react-router-dom'


const HeroImage = () => {
  return (

    <div className='hero'>
     <div className='mask'>
       <img className='intro-img' src={HeroImg} alt='HeroImg'/>
         <div className='content'>
         <div className='p'> <p>Hello all.!.,this is Abhi</p> </div>
          <h1>React Devoloper</h1>
           <div id='btns'>
              <Link to='/project'className='btn'>Projects</Link>
              <Link to='/contact'className='btn btn-light'>Contact</Link>
          </div>
        </div> 
     </div>
   </div>
  )
}

export default HeroImage