import React from 'react';
import About from '../About'

function Nav(){

    return (
        <header>
            <h1>Jessica Kelley</h1>
            <nav>
                <ul  className = "flex-row">
                    <li className = "mx-2">
                        <a href ="#about">About Me</a>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>

                </ul>
            </nav>
        </header> 
    );
}
export default Navigation;