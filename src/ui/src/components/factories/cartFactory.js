import ItemList from './itemTemplates/itemList.js'
import './cartFactory.css';


function CartFactory() {
    const CartItems: CartArray = [
        {id: 1, name: 'ASUS ExpertCenter C2223HE', price: 270, brand: 'Asus', size: 21.45, hdmi: 1, dp: 0, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/"},
        {id: 2, name: 'Designo MX279HS', price: 240, brand: 'Asus', size: 27, hdmi: 2, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/"},
        {id: 7, name: 'LG 27GP850P-B', price: 320, brand: 'LG', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link: "https://www.lg.com/de/monitore/lg-27gp850p-b"}
    ];

    let totalPrice = 0;
    for(let index = 0; index < CartItems.length; index++) {
        totalPrice += CartItems[index].price
    }

    return (
        <div>
            <div className="cart-title">
                Cart
            </div>
            {CartItems.map(item => <ItemList values={item}/>)}
            <div className="cart-total-price">
                Total Price: {totalPrice} €
            </div>
            <button className="buy-cart">
                to checkout
            </button>
        </div>
   );
}

export default CartFactory;