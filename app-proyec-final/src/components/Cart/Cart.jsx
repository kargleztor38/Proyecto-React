import { useContext } from "react"
import { DateContext } from "../context/DateContext"
import { CartItem } from "../CartItem/CartItem"
import { Link, NavLink } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
	const { cart, cleanCart, total } = useContext(DateContext)

	if (total === 0) {
		return (
			<div className="container carrito">
				<h1>No hay productos en el carrito</h1>
				<NavLink to='/' className='link' >Productos</NavLink>
			</div>
		)
	}

	return (
		<div className="container carrito">
			<h2 className="titulo">Productos en el carrito</h2>
			{ cart.map(product => <CartItem key={product.id} {...product} />) }
			<h3 className="total">Precio Total: ${ total }</h3>
			<button className="button btn" onClick={ cleanCart }>Vaciar Carrito</button>
			<Link to='/checkout' className="button">Checkout</Link>
		</div>
	)
}