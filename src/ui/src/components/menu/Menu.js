import './Menu.css';
import ProfileArea from './ProfileArea.js'

function Menu() {
    return (
        <div>
            <div className="menu-title">
                Profile
            </div>
            <ProfileArea/>
            <div className="menu-title">
                To Product List
            </div>
            <br/>
            <div className="menu-title">
                Filter
            </div>
        </div>
    );
}

export default Menu;
