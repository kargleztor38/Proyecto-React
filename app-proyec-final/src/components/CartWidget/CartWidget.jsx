import { useContext } from "react"
import { DateContext } from "../context/DateContext"
import './CartWidget.css'

export const CartWidget = () => {
	const { totalProducts } = useContext(DateContext)
	
  return (
	<div>
		<i className="ri-shopping-cart-2-fill navLinkCart"><span>{ totalProducts }</span></i>
	</div>
  )
}
