import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>WRAVEN Threat Actor Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/threats" activeClassName="active">Threats</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;