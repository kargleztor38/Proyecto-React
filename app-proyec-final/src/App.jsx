import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer, NavBar, DateProvider, Cart } from "./components"
import { CheckOut } from "./components/CheckOut/CheckOut"

export const App = () => {
    return (
        <BrowserRouter>
            <DateProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={'Todos los productos'}/>} />
                    <Route path="/category/:category" element={<ItemListContainer greeting={'Categorías'} />} />
                    <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
                    <Route path="/cart" element={ <Cart /> } />
                    <Route path="/checkout" element={ <CheckOut /> } />
                    <Route path="/*" element={ <Navigate to='/' /> } />
                </Routes>
            </DateProvider>
        </BrowserRouter>
    )
}
