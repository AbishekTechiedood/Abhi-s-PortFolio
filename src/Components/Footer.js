import '../Components/FooterStyles.css'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:'white' ,marginRight:'2rem'}}/>
            <div>
            <p>Supreme Avenue,Namakkal</p>
            </div>
        </div>

        <div className='phone'>

          <h4><FaPhone size={20} style={{color:'white' ,marginRight:'2rem'}}/>
          9566659473</h4>

        </div>


     <div className='email'>

       <h4><FaMailBulk size={20} style={{color:'white' ,marginRight:'2rem' , marginTop:'0.8rem'}}/>

        abishek.pv.99@gmail.com</h4>

      </div>

     </div>

    <div className='right'>

        <h4>About me</h4>
        <p>  This is Abishek,an Aspiring web devoloper , i enjoy discussing new projects and design challenges.
       </p>

       <div className='social'>

       <FaFacebook size={30} style={{color:'white' ,marginRight:'1rem'}}/>

       <FaWhatsapp size={30} style={{color:'white' ,marginRight:'1rem'}}/>

       <FaLinkedin size={30} style={{color:'white' ,marginRight:'1rem'}}/>


       </div>


    </div>
   </div>

</div>
   
  )
}

export default Footer