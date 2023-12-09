import { useContext } from "react"
import { DateContext } from "../context/DateContext"
import { CartItem } from "../CartItem/CartItem"



export const Cart = () => {
	const { cart } = useContext(DateContext)
	return (
		<div>
			{ cart.map(product => <CartItem key={product.id} {...product} />) }
		</div>
	)
}
