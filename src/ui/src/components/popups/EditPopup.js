import './EditPopup.css'
import {useContext} from 'react';
import PopupContext from '../contexts/PopupContext.js'
import ProductContext from '../contexts/ProductContext.js'

function EditPopup(props) {

    const setPopupPlaceholder = useContext(PopupContext)
    const {products, setProducts} = useContext(ProductContext)

    const idOfProductToEdit = props.idOfProductToEdit
    const indexInProductList = products.findIndex(product => product.id === idOfProductToEdit)

    let product = products[indexInProductList]
    const seller = product.seller

    function generateEntry(eventTarget) {
        let entry = {}
        entry.id = idOfProductToEdit
        entry.name = eventTarget.name.value
        entry.price = parseInt(eventTarget.price.value)
        entry.brand = eventTarget.brand.value
        entry.size = parseFloat(eventTarget.size.value)
        entry.hdmi = parseInt(eventTarget.hdmi.value)
        entry.dp = parseInt(eventTarget.dp.value)
        entry.vga = parseInt(eventTarget.vga.value)
        entry.dvi = parseInt(eventTarget.dvi.value)
        entry.usb = parseInt(eventTarget.usb.value)
        entry.aux = parseInt(eventTarget.aux.value)
        entry.link = eventTarget.link.value
        entry.seller = seller
        return entry
    }

    const edit = (event) => {
        event.preventDefault()
        const newEntry = generateEntry(event.target)
        const newProductList = products.slice(0)
        newProductList[indexInProductList] = newEntry
        setProducts(newProductList)
        setPopupPlaceholder(null)
    }

    function removeFromProducts() {
        setPopupPlaceholder(null)
        setProducts(products.filter(product => product.id !== idOfProductToEdit))

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
                        <label htmlFor="name">Name:</label><br/>
                        <input className="edit-input" type="text" id="name" name="name" defaultValue={product.name}/><br/>
                        <label htmlFor="price">Price:</label><br/>
                        <input className="edit-input" type="number" id="price" name="price" min="0" max="99999" defaultValue={product.price}/><br/>
                        <label htmlFor="brand">Brand:</label><br/>
                        <input className="edit-input" type="text" id="brand" name="brand" defaultValue={product.brand}/><br/>
                        <label htmlFor="size">Size:</label><br/>
                        <input className="edit-input" type="number" id="size" name="size" min="0" step ="0.01" defaultValue={product.size}/><br/>
                        Ports:
                        <div className="edit-ports">
                            <div>
                                <label htmlFor="hdmi">HDMI:</label><br/>
                                <input className="edit-port" type="number" id="hdmi" name="hdmi" min="0" max="9" defaultValue={product.hdmi}/><br/>
                            </div>
                            <div>
                                <label htmlFor="dp">DP:</label><br/>
                                <input className="edit-port" type="number" id="dp" name="dp" min="0" max="9" defaultValue={product.dp}/><br/>
                            </div>
                            <div>
                                <label htmlFor="vga">VGA:</label><br/>
                                <input className="edit-port" type="number" id="vga" name="vga" min="0" max="9" defaultValue={product.vga}/><br/>
                            </div>
                            <div>
                                <label htmlFor="dvi">DVI:</label><br/>
                                <input className="edit-port" type="number" id="dvi" name="dvi" min="0" max="9" defaultValue={product.dvi}/><br/>
                            </div>
                            <div>
                                <label htmlFor="usb">USB:</label><br/>
                                <input className="edit-port" type="number" id="usb" name="usb" min="0" max="9" defaultValue={product.usb}/><br/>
                            </div>
                            <div>
                                <label htmlFor="aux">AUX:</label><br/>
                                <input className="edit-port" type="number" id="aux" name="aux" min="0" max="9" defaultValue={product.aux}/><br/>
                            </div>
                        </div>
                        <label htmlFor="link">link:</label><br/>
                        <textarea className="edit-input" id="link" name="link" rows="5" defaultValue={product.link}/><br/>
                        <input className="submit-button" type="submit" value="Edit"/>
                    </form>
                </div>
                <button className="delete-button" onClick={removeFromProducts}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default EditPopup;