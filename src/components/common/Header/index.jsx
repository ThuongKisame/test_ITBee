import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { useDispatch, useSelector } from "react-redux";
import { changeDarkMode } from "../../../actions/darkModeAction";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  let darkMode = useSelector((state) => state.darkMode);



  const dispatch = useDispatch();

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChangeDarkMode = () => {
    dispatch(changeDarkMode(!darkMode));
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`${routes.home}?q=${searchTerm}`);
    }
  };



  return (
    <div className="header flex-center p-h-4 text">
      <p className="slogan-text">
        <Link to={routes.home}>Wavelabs</Link>
      </p>
      <input
        placeholder="Search"
        className="input-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />

      <div className="flex-center">
        <div
          className="icon-wrap btn-hover flex"
          onClick={handleChangeDarkMode}
        >
          {!darkMode ? (
            <MdSunny color="red" size={25} />
          ) : (
            <IoMoon color="blue" size={25} />
          )}
        </div>
        <div className="icon-wrap hover flex" onClick={handleToggleDropdown}>
          <CgProfile size={25} />
          {showDropdown && (
            <div className="dropdown-content">
              <div>
                <Link to={routes.profile}>My Profile</Link>
              </div>
              <div>
                <Link to={routes.setting}>My Settings</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
