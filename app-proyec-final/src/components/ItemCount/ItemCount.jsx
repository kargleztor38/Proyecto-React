import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0) { setCount(count + 1) }
    };

    const decrement = () => {
        if (count > 0) { setCount(count - 1) }
    };

    return (
        <>
            <div className="btnContainer">
                <button className="button btn-1" onClick={increment}>+</button>
                <button className="button btn-2">Count: {count}</button>
                <button className="button btn-3" onClick={decrement}>-</button>
            </div>
            <button className="button">Agregar al carrito</button>
        </>
    );
};