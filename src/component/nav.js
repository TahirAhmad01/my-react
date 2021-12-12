import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/about"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/service"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Service
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
