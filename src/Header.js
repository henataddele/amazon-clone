import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header_logo "
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header_logo"
          />
        </Link>
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!user && "/login"} className="header_clearlink">
            <div onClick={handleAuthenticaton} className="header_option">
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header_clearlink">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header_option prime">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" className="header_clearlink ">
            <div className="header_optionBasket ">
              <ShoppingCartIcon />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header
