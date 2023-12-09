import { useContext, useEffect, useState } from "react";
import { DateContext } from "../context/DateContext";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
	const { products } = useContext(DateContext);
	const [productId, setProductId] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const findForId = (id) => {
			return products.find(prod => prod.id === id);
		};
		setProductId(findForId(id));
	}, [id, products]);

	return (
		<div>
			<ItemDetail {...productId} />
		</div>
	);
};
