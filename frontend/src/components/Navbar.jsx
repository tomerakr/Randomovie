// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar() {

    return (
        <nav className="navbar navbar-expand fixed-top" style={{ backgroundColor: '#222831', color: 'red' }}>
            <div className="container-fluid">
                <h4>
                    <Link to="/" className="nav-link text-light">🎬 My Movies</Link>
                </h4>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-light">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/randomovie" className="nav-link text-light">Randomovie</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/poster" className="nav-link text-light">Poster</Link>
                    </li>
                    {/* Add more links here if needed */}
                </ul>
                </div>
            </div>

            <SearchBar />
        </nav>
    );
}

export default Navbar;
