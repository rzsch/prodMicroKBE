import ItemBox from './itemTemplates/itemBox.js'
import './productFactory.css';


function ProductFactory(props) {

   let monitors = props.products
    return (
        <div className="product-area">
            {monitors.map(monitor => <ItemBox key={monitor.id} values={monitor} addToCart={props.addToCart}/>)}
        </div>
   );
}

export default ProductFactory;