import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer, NavBar, DateProvider } from "./components"

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <DateProvider>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={'Todos los productos'}/>} />
                    <Route path="/category/:category" element={<ItemListContainer greeting={'Categorías'} />} />
                    <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
                    <Route path="/*" element={ <Navigate to='/' /> } />
                </Routes>
            </DateProvider>
        </BrowserRouter>
    )
}
