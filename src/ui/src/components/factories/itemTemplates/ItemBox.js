import '../../../css/Monitor.css';
import {useContext} from 'react';
import UserContext from '../../contexts/UserContext.js';
import PopupContext from '../../contexts/PopupContext.js';
import EditPopup from '../../popups/EditPopup.js';

function ItemBox(props) {

    const {currentUser, } = useContext(UserContext)
    const setPopupPlaceholder = useContext(PopupContext)


    function editProduct(idOfProductToEdit) {
        setPopupPlaceholder(<EditPopup idOfProductToEdit={idOfProductToEdit}/>)
    }

    function hasRightsToEdit() {
        const seller = props.values.seller
        const username = currentUser.name
        const rights = currentUser.rights
        const adminRights = "edit-all"
        if (rights === adminRights) {
            return true
        }
        return username === seller
    }

    function addOrEditButton () {
        if (hasRightsToEdit()) {
            return (
                <button className="small-button edit-product" onClick={() => editProduct(props.values.id)}>
                    edit item
                </button>
            );
        } else {
            return (
                <button className="small-button monitor-add-to-cart" onClick={() => props.addToCart(props.values.id)}>
                    add to cart
                </button>
            );
        }
    }

    return (
        <div className="item-area">
            <div className="monitor-frame">
                <div className="monitor-screen">
                    <div className="monitor-brand">
                        {props.values.brand}
                    </div>
                    <div className="monitor-price">
                        {props.values.price} €
                    </div>
                    <div className="monitor-size">
                        &larr; {props.values.size} &rarr;
                    </div>
                    {addOrEditButton()}
                </div>
                <div className="monitor-io-ports">
                    <div>HDMI<br/>{props.values.hdmi}</div>
                    <div>DP<br/>{props.values.dp}</div>
                    <div>VGA<br/>{props.values.vga}</div>
                    <div>DVI<br/>{props.values.dvi}</div>
                    <div>USB<br/>{props.values.usb}</div>
                    <div>AUX<br/>{props.values.aux}</div>
                </div>
                <div className="monitor-stand">
                </div>
                <div className="monitor-base">
                </div>
                <div className="monitor-name">
                    {props.values.name}<br/>
                    <a href={props.values.link}>More Details</a>
                </div>
            </div>
        </div>
    );
}

export default ItemBox;