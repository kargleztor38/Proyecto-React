import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/Firebase";
import { DateContext } from "./DateContext";

export const DateProvider = ({ children }) => {
    // LLamado a los productos de firebase y su organización para facilitar su uso en toda la aplicación
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const myProducts = query(collection(db, "products"));
        getDocs(myProducts).then((resp) => {
            const listProd = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(listProd);
        });
    }, []);

    // Lógica del carrito
    const [cart, setCart] = useState([])
    
    // Función para agregar productos al carrito
    const including = ( item) => {
        setCart([...cart, {item}])
    }
    

    return (
        <DateContext.Provider value={{ products, including, cart, setCart }}>
            {children}
        </DateContext.Provider>
    );
};
