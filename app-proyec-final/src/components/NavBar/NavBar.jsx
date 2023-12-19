import { NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import  './NavBar.css'

export const NavBar = () => {
    
    return (
        <nav className="container navBar">
            <NavLink to='/'>
                <h2>Productos Artesanales</h2>
            </NavLink>
            <div className="navLinkContainer">
                <NavLink to='/' className='navLink'>Inicio</NavLink>
                <NavLink to='/category/Camiseta' className='navLink'>Camisetas</NavLink>
                <NavLink to='/category/Camisas' className='navLink'>Camisas</NavLink>
                <NavLink to='/category/Cuadros' className='navLink'>Cuadros</NavLink>
            </div>
            <NavLink to='/cart' className='LinkContainer'>
                <CartWidget />
            </NavLink>
        </nav>
    )
}