import { useContext } from 'react'
import './CartItem.css'
import { DateContext } from '../context/DateContext'

export const CartItem = ({ id, name, precio, quantity }) => {
	const { removeItemCart } = useContext(DateContext)

	const numberQuantity = precio * quantity

    return (
        <article key={id} className="cartItem container">
			<header className='header'>
				<h3>{ name }</h3>
			</header>
			<section className='section'>
				<p>Cantidad: { quantity }</p>
				<p>Precio por unidad: ${ precio }</p>
			</section>
			<p className='subtotal'>Subtotal: { numberQuantity }</p>
			<button className='button' onClick={() => {removeItemCart(id)}}>Eliminar</button>
		</article>
    )
}