import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count >= 1) { setCount(count + 1) }
    };

    const decrement = () => {
        if (count > 1) { setCount(count - 1) }
    };

    return (
        <>
            <div className="btnContainer">
                <button className="button btn-1" onClick={increment}>+</button>
                <button className="button btn-2">Count: {count}</button>
                <button className="button btn-3" onClick={decrement}>-</button>
            </div>
            <button className="button" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </>
    );
};