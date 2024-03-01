import React from 'react'
import { Link} from 'react-scroll'
import './nav.css';
const NavBar = (props) => {
  return (
 <>
       <nav className='navbar'>

    { props.search? <div className='contain'>
        <Link to='/' className='first'>Home</Link>
        <Link to='/' className='first'>Introduction</Link>
        <Link to='/' className='first'>About</Link>
        <Link to='/' className='first'>{props.name}</Link>
        </div>:"nothing"}
  </nav>



    </>
  )
}

export default NavBar



