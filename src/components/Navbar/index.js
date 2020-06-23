import React from 'react';
import SearchUser from "../SearchUser";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchUser/>
    </div>
</nav>
    );
}
export default Navbar;