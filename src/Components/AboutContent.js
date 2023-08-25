import '../Components/AboutContentStyle.css'
import { Link } from 'react-router-dom'


const AboutContent = () => {

  return (

    <div className='about'>
      <div className='left'>
        <h1>Who am i?</h1>
        <p>Im a react front-end devoloper. I create responsive secure websites for my clients. </p>
        <Link to='/contact'></Link>
         <button className='btn'>Contact</button>
     </div>

  </div>


          
 
  )
}

export default AboutContent