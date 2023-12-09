import { NavLink } from "react-router-dom"
import './Item.css'

export const Item = ({ id, img, precio, stock, name }) => {
    return (
        <article className="card">
            <header className="headerCard">
                <h3>{name}</h3>
            </header>
            <picture className="imgCard">
                <img src={img} alt={name} className='contentImgCard'/>
            </picture>
            <section className="secCard">
                <p className='text'>Precio: {precio}</p>
                <p className='text'>Stock disponible: { stock }</p>
            </section>
            <footer>
                <NavLink to={`/detail/${id}`} className="buttonCard">Ver detalles</NavLink>
            </footer>
        </article>
    )
}
