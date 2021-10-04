import React from 'react';

function Nav({ setPage }){
    return (
        <nav>
            <ul  className = "flex-row">
                <li className = "mx-2">
                    <a href ="#about" onClick={() => setPage("about")}>About Me</a>
                </li>

                <li className = "mx-2">
                    <a href ="#portfolio" onClick={() => setPage("portfolio")}>Portfolio</a>
                </li>                  
                <li className = "mx-2">
                    <a href ="#contact" onClick={() => setPage("contact")}>Contact</a>
                </li>
                <li className = "mx-2">
                    <a href ="#resume" onClick={() => setPage("resume")}>Resume</a>
                </li>

            </ul>
        </nav>

    );
}
export default Nav;