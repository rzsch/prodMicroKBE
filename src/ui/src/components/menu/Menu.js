import './Menu.css';

function Menu() {
  return (
    <div>
        <div className="menu-title">
            Profile
        </div>
        <div className="menu-content">
            <p>You are currently not logged in.</p>
        </div>
        <button className="menu-button">
            Login
        </button>
        <button className="menu-button" id="logout">
            Logout
        </button>
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
