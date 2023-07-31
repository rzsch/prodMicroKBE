import './App.css';
import ProductFactory from './components/factories/ProductFactory.js'
import Header from './components/header/Header.js'
import {useState} from 'react';
import CartContext from './components/contexts/CartContext.js'
import ProductContext from './components/contexts/ProductContext.js'
import UserContext from './components/contexts/UserContext.js'

function App() {
    const products = [
        {id: 1, name: 'ASUS ExpertCenter C2223HE', price: 270, brand: 'Asus', size: 21.45, hdmi: 1, dp: 0, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/"},
        {id: 2, name: 'Designo MX279HS', price: 240, brand: 'Asus', size: 27, hdmi: 2, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/"},
        {id: 3, name: 'ASUS VZ279HEG1R', price: 200, brand: 'Asus', size: 27, hdmi: 1, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 0, link: "https://www.asus.com/de/displays-desktops/monitors/gaming/vz279heg1r/"},
        {id: 4, name: 'TUF Gaming VG32UQA1A', price: 670, brand: 'Asus', size: 31.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link:"https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg32uqa1a/"},
        {id: 5, name: 'TUF Gaming VG258QM', price: 515, brand: 'Asus', size: 24.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg258qm/"},
        {id: 6, name: 'INZONE M9', price: 1000, brand: 'Sony', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 3, aux: 1, link: "https://www.sony.de/electronics/gaming-monitore/inzone-m9"},
        {id: 7, name: 'LG 27GP850P-B', price: 320, brand: 'LG', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link: "https://www.lg.com/de/monitore/lg-27gp850p-b"},
    ];

    let productsInCart = [];

    const [shoppingCart, setShoppingCart] = useState(productsInCart)

    const user = [
        {id: 1, name: "guest", rights: "none"},
        {id: 2, name: "user", rights: "buy"},
        {id: 3, name: "admin", rights: "edit"}
    ]

    const [currentUser, setCurrentUser] = useState(user[0])

    return (
        <div className="App">
            <UserContext.Provider value={{currentUser, setCurrentUser}}>
                <CartContext.Provider value={{shoppingCart, setShoppingCart}}>
                    <Header/>
                    <ProductContext.Provider value={products}>
                        <ProductFactory/>
                    </ProductContext.Provider>
                </CartContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
