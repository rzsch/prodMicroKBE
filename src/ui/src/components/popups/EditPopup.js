import './LoginPopup.css'
import {useContext} from 'react';
import PopupContext from '../contexts/PopupContext.js'
import ProductContext from '../contexts/ProductContext.js'

function EditPopup(props) {

    const setPopupPlaceholder = useContext(PopupContext)
    const {products, setProducts} = useContext(ProductContext)

    const idOfProductToEdit = props.idOfProductToEdit
    const indexInProductList = products.findIndex(product => product.id === idOfProductToEdit)

    /*let name = products[indexInProductList].name
    let price = products[indexInProductList].price
    let brand = products[indexInProductList].brand
    let size = products[indexInProductList].size
    let hdmi = products[indexInProductList].hdmi
    let dp = products[indexInProductList].dp
    let vga = products[indexInProductList].vga
    let dvi = products[indexInProductList].dvi
    let usb = products[indexInProductList].usb
    let aux = products[indexInProductList].aux
    let link = products[indexInProductList].link
    let seller = products[indexInProductList].seller*/

    const edit = (event) => {
        event.preventDefault()
        const newProductList = products.slice(0)
        newProductList[indexInProductList].price = 123
        setProducts(newProductList)
        setPopupPlaceholder(null)

    }

    function closePopup() {
        setPopupPlaceholder(null)
    }

    return (
        <div className="blurred-background">
            <div className="form-container">
                <div className="form-header">
                    <button className="close-popup" onClick={closePopup}>
                        <div className="close-popup-x"></div>
                        <div className="close-popup-x"></div>
                    </button>
                </div>
                <div className="form-area">
                    <form onSubmit={edit}>
                        <label htmlFor="username">Username:</label><br/>
                        <input className="login-input" type="text" id="username" name="username" placeholder="Username"/><br/><br/>
                        <label htmlFor="password">Password:</label><br/>
                        <input className="login-input" type="password" id="password" name="password" placeholder="Password"/><br/><br/>
                        <input className="submit-button" type="submit" value="Edit"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPopup;