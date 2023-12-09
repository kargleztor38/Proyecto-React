import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/Firebase";
import { DateContext } from "./DateContext";

export const DateProvider = ({ children }) => {
    // LLamado a los productos de firebase y su organización para facilitar su uso
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const myProducts = query(collection(db, "products"));
        getDocs(myProducts).then((resp) => {
            const listProd = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(listProd);
        });
    }, []);

    // Lógica del carrito

    return (
        <DateContext.Provider value={{ products }}>
            {children}
        </DateContext.Provider>
    );
};
