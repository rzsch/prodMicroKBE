import './ItemBox.css';

function ItemBox(props) {
    return (
        <div className="Item-area">
            <div className="Monitor-frame">
                <div className="Monitor-screen">
                    <div className="Monitor-brand">
                        {props.values.brand}
                    </div>
                    <div className="Monitor-price">
                        {props.values.price} €
                    </div>
                    <div className="Monitor-size">
                        &larr; {props.values.size} &rarr;
                    </div>
                    <button className="Monitor-add-to-basket">
                        add to basket
                    </button>
                </div>
                <div className="Monitor-io-ports">
                    <div>HDMI<br/>{props.values.hdmi}</div>
                    <div>DP<br/>{props.values.dp}</div>
                    <div>VGA<br/>{props.values.vga}</div>
                    <div>DVI<br/>{props.values.dvi}</div>
                    <div>USB<br/>{props.values.usb}</div>
                    <div>AUX<br/>{props.values.aux}</div>
                </div>
                <div className="Monitor-stand">
                </div>
                <div className="Monitor-base">
                </div>
                <div className="Monitor-name-and-info">
                    {props.values.name}<br/>
                    <a href={props.values.link}>More Details</a>
                </div>
            </div>
        </div>
    );
}

export default ItemBox;