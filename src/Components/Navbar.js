import { Link } from 'react-router-dom';
import '../Components/NavbarStyles.css';
import {FaBars , FaTimes} from 'react-icons/fa'
import React , {useState}from 'react';



  const Navbar = () => {

    const [click ,setClick] =useState(false)

   const clickHandler = () => {

       setClick(!click)

   }

   const [color , setColor]=useState(false);

    const changeColor = () =>{

        if (window.scrollY >= 1){

             setColor(true);

        } else{

          setColor(false);
        }

   };

    window.addEventListener('scroll',changeColor);

return(


 <div className={color ? 'header header-bg':
 'header'}>

   <Link to='/'>
    <h1>Portfolio</h1>
   </Link>

<ul className = {click ?'active nav-menu':'nav-menu'}>

   <li>

        <Link to ='/'>Home</Link>

    </li>
    <li>

        <Link to ='/project'>Project</Link>

    </li>
    <li>

        <Link to ='/about'>About</Link>

    </li>
    <li>

        <Link to ='/contact'>Contact</Link>
        
    </li>
 
  </ul>

     <div className='hamburger' onClick={clickHandler}>
     
     {click ? (<FaTimes size={20} style={{color:'#fff'}} />) :
     (<FaBars size={20} style={{color:'#fff'}} />)}

     </div>


 </div>


    )


}


export default Navbar