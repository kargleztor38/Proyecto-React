import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Link } from "react-router-dom"
import { DateContext } from "../context/DateContext"


export const ItemDetail = ({ id, name, precio, img, stock, category, description }) => {
    const [stateQuantity, setStateQuantity] = useState(0)
    const { includingCart } = useContext(DateContext)

    const handleAdd = ( quantity ) => {
        setStateQuantity(quantity)
            const item = {
                id, name, precio, quantity
            }
            includingCart(item)
    }

    return (
        <article className="detail container">
            <header>
                <h2 className="detail-h2">{name}</h2>
            </header>
            <picture>
                <img className="contentImg" src={img} alt={name} />
            </picture>
            <section className="detailSec">
                <p className="detail-p">Precio: ${precio}</p>
                <p className="detail-p">Descripción: {description}</p>
                <p className="detail-p">Categoría: {category}</p>
                <p className="detail-p">Stock: {stock}</p>
            </section>
            <footer>
                {
                    stateQuantity > 0 
                    ? <Link to='/cart' className="compra">Finalizar Compra</Link>
                    : <ItemCount stock={stock}  onAdd={handleAdd} />
                }
            </footer>
        </article>
    )
}
