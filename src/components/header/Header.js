import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"> <img className="header_icon" src="https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1.png"/> </Link>
                <Link to="/movies/popular">Popular</Link>
                <Link to="/movies/top rated">Top Rated</Link>
                <Link to="/movies/upcomming">Upcoming</Link>
            </div>
        </div>
    );
};

export default Header;

