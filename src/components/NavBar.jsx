import React from 'react'
import '../styles/navbar.css'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <ul className='navBar'>
      <div className='navItems'>
       <li><a href="">Index</a></li>
       <li><a href="">Novedades</a></li>
       <li><a href="">Contacto</a></li>
       <li><a href="">Tienda</a></li>
       </div>
       <div className='navCar'>
       <CartWidget/>
       </div>
     

    </ul>
  )
}


export default NavBar