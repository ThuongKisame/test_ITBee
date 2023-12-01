import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
    return ( <div className="header flex-center p-h-4">
        <p className="slogan-text"><Link to={routes.home}>Wavelabs</Link></p>
        <input placeholder="Search" className="input-search"/>
        <span className="icon-wrap btn" onClick={handleToggleDropdown} ><CgProfile size={20}  />
        {showDropdown && (
          <div className="dropdown-content">
            <div><Link to={routes.profile}>My Profile</Link></div>
            <div><Link to={routes.setting}>My Settings</Link></div>
          </div>
        )}
        </span>
    </div> );
}

export default Header;