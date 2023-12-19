import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/Firebase";
import { DateContext } from "./DateContext";

export const DateProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    
    // LLamado a los productos de firebase y su organización para facilitar su uso en toda la aplicación
    useEffect(() => {
        const myProducts = query(collection(db, "products"));
        getDocs(myProducts).then((resp) => {
            const listProd = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(listProd);
        });
    }, []);
    
    // Lógica del carrito
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
        
    // Función para agregar productos al carrito
    const includingCart = ( item ) => {
        if (!inCart(item.id)) {
            setCart( [...cart, item])
        } else {
            alert('El producto ya fue agregado')
        }
    }

    // Calcular total
    const handleTotal = () => {
        const totalItem = cart.reduce(( total, item ) => total + item.precio * item.quantity, 0)
        setTotal(totalItem)
    }

    // Agregando cantidad de productos al icono del carrito
    const handleQuantity = () => {
        const totalCart = cart.reduce(( acc, items ) => acc + items.quantity, 0)
        setTotalProducts(totalCart)
    }

    useEffect(() => {
        handleTotal()
        handleQuantity()
    })
    
    // Función para eliminar productos del carrito
    const removeItemCart = (ItemCartId) => {
        const removeItem = cart.filter(prod => prod.id !== ItemCartId)
        setCart(removeItem)
    }

    // Limpiar el carrito
    const cleanCart = () => {
        setCart( [] )
    }

    // Validación de productos en el carrito
    const inCart = ( id ) => {
        return cart.some(prod => prod.id === id)
    }
    

    return (
        <DateContext.Provider value={{ products, cart, total, totalProducts, setCart, includingCart, cleanCart, removeItemCart }}>
            {children}
        </DateContext.Provider>
    );
};