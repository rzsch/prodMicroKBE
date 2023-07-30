import './itemBox.css';

function ItemBox(props) {
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
                    <button className="monitor-add-to-cart" onClick={() => props.addToCart(props.values.id)}>
                        add to cart
                    </button>
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
                <div className="monitor-name-and-info">
                    {props.values.name}<br/>
                    <a href={props.values.link}>More Details</a>
                </div>
            </div>
        </div>
    );
}

export default ItemBox;