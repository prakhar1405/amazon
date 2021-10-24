import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (
        <div className='header'>
            <img
            className="header_logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg" />
        
            <div
            className="header_search">
                <input
                className="header_searchInput"
                type="text"/>
                {/* logo */}
                <SearchIcon className="header_searchIcon"
                    />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& orders</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Orders</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasket/>
                    <span className="header__optionLineTwo header__basketCount">
                    0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
