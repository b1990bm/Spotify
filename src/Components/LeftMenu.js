import React from 'react';
import "../Styles/LeftMenu.css";
import { FaSpotify , FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
const LeftMenu = () => {
    return (
        <div>
            <div className="leftmenu">
                <div className="logoContainer">
                    <i><FaSpotify /></i>
                    <h2>Spotify</h2>
                    <i><FaEllipsisH /></i>
                </div>
                <div className="searchBax">
                   <input type="text" placeholder='Search...' />
                   <i className="serachIcon"><BiSearchAlt /></i> 
                </div>
            </div>
        </div>
    );
};

export default LeftMenu;