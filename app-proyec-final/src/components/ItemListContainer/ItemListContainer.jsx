import { useContext, useEffect, useState } from "react";
import "./ItemListContainer.css";
import { DateContext } from "../context/DateContext";
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    const { products } = useContext(DateContext);
    const [productCategory, setProductCategory] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const filterForCategory = (category) => {
            return products.filter((product) => product.category === category);
        };
        setProductCategory(filterForCategory(category));
        { category ? filterForCategory : setProductCategory(products) }
    }, [category, products]);

    return (
        <>
            <h1 className="title">{greeting}</h1>
            <div className="container ItemListContainer">
                { productCategory.map(product => <Item key={product.id} {...product} /> ) }
            </div>
        </>
    );
};
