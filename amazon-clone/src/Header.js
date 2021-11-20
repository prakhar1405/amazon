import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    return (
        <div className='header'>

            <Link to="/">
                <img
                className="header_logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg" />
            </Link>
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
                <Link to='/login'>
                <div className="header_option">
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                </Link>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& orders</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Orders</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasket/>
                    <span className="header_optionLineTwo header_basketCount">
                    {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
