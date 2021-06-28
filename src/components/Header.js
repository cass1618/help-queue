import React from "react";
import gpImage from "./../img/goodplace.jpeg"

function Header() {
    return (
        <React.Fragment>
            <h1>Help Queue</h1>
            <img src={gpImage} alt="good and bad stuff" />
        </React.Fragment>
    );
}

export default Header;