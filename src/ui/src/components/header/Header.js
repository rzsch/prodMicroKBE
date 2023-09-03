import '../../css/Cart.css';
import '../../css/Sidebar.css';
import '../../css/BurgerMenu.css';
import CartFactory from '../factories/CartFactory.js'
import Menu from '../menu/Menu.js'
import {useState, useContext} from 'react';
import CartContext from '../contexts/CartContext.js'

function Header(props) {

    const {shoppingCart, } = useContext(CartContext)

    let monitorsInCart = shoppingCart

    let productsInCart = 0
    for(let index = 0; index < monitorsInCart.length; index++) {
        productsInCart += monitorsInCart[index].amount
    }

    const [burgerMenuLine, setBurgerMenuLine] = useState("burger-menu-line not-clicked")
    const [menu, setMenu] = useState("menu menu-hidden")
    const [cart, setCart] = useState("cart cart-hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isCartClicked, setIsCartClicked] = useState(false)

    const toggleMenu = () => {
        if(!isMenuClicked) {
            setBurgerMenuLine("burger-menu-line clicked")
            setMenu("menu menu-visible")
            setCart("cart cart-hidden")
            setIsCartClicked(false)
        } else {
            setBurgerMenuLine("burger-menu-line not-clicked")
            setMenu("menu menu-hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const toggleCart = () => {
        if(!isCartClicked) {
            setCart("cart cart-visible")
            setMenu("menu menu-hidden")
            setIsMenuClicked(false)
            setBurgerMenuLine("burger-menu-line not-clicked")

        } else {
            setCart("cart cart-hidden")
        }
        setIsCartClicked(!isCartClicked)
    }

    return (
        <div className="navigation-bar">
            <button className="burger-menu" onClick={toggleMenu}>
                <div className={burgerMenuLine}></div>
                <div className={burgerMenuLine}></div>
                <div className={burgerMenuLine}></div>
            </button>
            <div className="shopping-cart-amount">
                {productsInCart}
                <button className="to-shopping-cart" onClick={toggleCart}>
                    <svg width="50" height="40" className="shopping-cart-svg">
                        <circle cx="15" cy="25" r="3"/>
                        <circle cx="30" cy="25" r="3"/>
                        <polyline
                            points="2,2 7,2 12,19 33,19 37,7 13,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div className={menu}>
                <Menu/>
            </div>
            <div className={cart}>
                <CartFactory/>
            </div>
        </div>
   );
}

export default Header;