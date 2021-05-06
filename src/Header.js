import React from 'react'
import logo from './header_logo.jpg'
import './Header.css' 
import SearchIcons from "@material-ui/icons/Search"

function header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="logo"/>
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
            </div> 
        </div>
    )
}

export default header
