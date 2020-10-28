import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> ||
            <Link style={linkStyleTwo}
            to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
    
}

const linkStyleTwo = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '5px'
    
}

export default Header;
