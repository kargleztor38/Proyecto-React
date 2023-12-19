import { useContext, useState } from "react"
import { CheckOutForm } from "../CheckOutForm/CheckOutForm"
import { DateContext } from "../context/DateContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../config/Firebase"
import './CheckOut.css'

export const CheckOut = () => {
	const { cart, cleanCart, total } = useContext(DateContext)
	const [orderId, setOrderId] = useState('')

	const createdOrder = (dateForm) => {
		const customerOrder = {
			customer: dateForm,
			products: cart,
			price: total
		}
		
		const orderRef = collection( db, 'order')
		addDoc( orderRef, customerOrder )
			.then(( doc ) => {
				setOrderId( doc.id )
				cleanCart()
			})
	}
	
	return (
		<div className="container orden">
			{ orderId ? <h2>El id de su orden es: { orderId }</h2> : <CheckOutForm order={ createdOrder }/> }
		</div>
	)
}