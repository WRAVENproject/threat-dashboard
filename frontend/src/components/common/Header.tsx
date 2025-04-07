import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>WRAVEN Threat Actor Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/threats">Threats</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;