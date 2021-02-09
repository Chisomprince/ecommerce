import { createContext, useState } from 'react'

const AppContext = createContext()

export function ContextWrapper(props) {
    const [user, setUser] = useState({
        uid: '',
        email: [],
        orders: []
    })
    const [cart, setCart] = useState([])
    const [currentData, setCurrentData] = useState([])
    console.log(cart)

    //add item to cart
    const addToCart = (e) => {
        //check if already in array
        const checkCart = cart.some((items) => items.id === e)
        checkCart ? setCart(cart.map((item) => item.id === e ? { ...item, qty: item.qty + 1 } : item))
            :
            currentData.map((item) => item.id === e ? setCart([...cart, { ...item, qty: 1 }]) : item);
        
    }
    //remove from cart
    const removeFromCart = (e) => setCart(cart.filter((item) => item.id !== e))

    // increase cart quantity
    const increaseQty = (e) => setCart(cart.map((item) => item.id === e ? { ...item, qty: item.qty + 1 } : item))

    //decrease cart quantity
    const decreaseQty = (e) => setCart(cart.map((item) => item.id === e ? { ...item, qty: item.qty <= 1 ? 1 : item.qty - 1 } : item))

    return (
        <AppContext.Provider value={{ user, cart, currentData, setCurrentData, setCart, setUser, addToCart, removeFromCart, increaseQty, decreaseQty }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContext