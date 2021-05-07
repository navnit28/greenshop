import React from 'react'
import logo from './header_logo.jpg'
import './Header.css' 
import SearchIcons from "@material-ui/icons/Search"
import  ShoppingBasketIcon   from '@material-ui/icons/ShoppingBasket'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {

    const [{basket},dispatch]=useStateValue();

    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo' src={logo} alt="logo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcons className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello guest
                    </span>
                    <span className="headeroptionLineTwo">
                        Sign in
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="headeroptionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="headeroptionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>            
                </div>
                </Link>
            </div> 
        </div>
    )
}

export default Header
