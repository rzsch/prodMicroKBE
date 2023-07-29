import './header.css';
import BasketFactory from '../factories/cartFactory.js'
import Menu from '../menu/menu.js'
import {useState} from 'react';

function Header() {

    const [burger_menu_line, setBurgerMenuLine] = useState("burger-menu-line not-clicked")
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
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={burger_menu_line}></div>
                <div className={burger_menu_line}></div>
                <div className={burger_menu_line}></div>
            </div>
            <button className="to-shopping-cart" onClick={toggleCart}>
                <svg width="50" height="40" className="shopping-cart-svg">
                    <circle cx="15" cy="25" r="3"/>
                    <circle cx="30" cy="25" r="3"/>
                    <polyline
                        points="2,2 7,2 12,19 33,19 37,7 13,7"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <div className={menu}>
                <Menu/>
            </div>
            <div className={cart}>
                <BasketFactory/>
            </div>
        </div>
   );
}

export default Header;