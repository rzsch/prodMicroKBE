import './App.css';
import './css/Buttons.css';
import './css/Popup.css';
import ProductFactory from './components/factories/ProductFactory.js';
import Header from './components/header/Header.js';
import {useState} from 'react';
import CartContext from './components/contexts/CartContext.js';
import ProductContext from './components/contexts/ProductContext.js';
import UserContext from './components/contexts/UserContext.js';
import PopupContext from './components/contexts/PopupContext.js';

function App() {
    const productList = [
        {id: 1, name: 'ASUS ExpertCenter C2223HE', price: 270, brand: 'Asus', size: 21.45, hdmi: 1, dp: 0, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", seller: "asus"},
        {id: 2, name: 'Designo MX279HS', price: 240, brand: 'Asus', size: 27, hdmi: 2, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/", seller: "asus"},
        {id: 3, name: 'ASUS VZ279HEG1R', price: 200, brand: 'Asus', size: 27, hdmi: 1, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 0, link: "https://www.asus.com/de/displays-desktops/monitors/gaming/vz279heg1r/", seller: "asus"},
        {id: 4, name: 'TUF Gaming VG32UQA1A', price: 670, brand: 'Asus', size: 31.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link:"https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg32uqa1a/", seller: "asus"},
        {id: 5, name: 'TUF Gaming VG258QM', price: 515, brand: 'Asus', size: 24.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg258qm/", seller: "asus"},
        {id: 6, name: 'INZONE M9', price: 1000, brand: 'Sony', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 3, aux: 1, link: "https://www.sony.de/electronics/gaming-monitore/inzone-m9", seller: "sony"},
        {id: 7, name: 'LG 27GP850P-B', price: 320, brand: 'LG', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link: "https://www.lg.com/de/monitore/lg-27gp850p-b", seller: "lg"},
    ];

    let productsInCart = [];

    const [products, setProducts] = useState(productList)

    const [shoppingCart, setShoppingCart] = useState(productsInCart)

    const [currentUser, setCurrentUser] = useState({id: 1, name: "guest", rights: "none"})

    const [popupPlaceholder, setPopupPlaceholder] = useState(null)

    return (
        <div className="App">
            <PopupContext.Provider value={setPopupPlaceholder}>
                <UserContext.Provider value={{currentUser, setCurrentUser}}>
                    <CartContext.Provider value={{shoppingCart, setShoppingCart}}>
                        <ProductContext.Provider value={{products, setProducts}}>
                            {popupPlaceholder}
                            <Header/>
                            <ProductFactory/>
                        </ProductContext.Provider>
                    </CartContext.Provider>
                </UserContext.Provider>
            </PopupContext.Provider>
        </div>
    );
}

export default App;
