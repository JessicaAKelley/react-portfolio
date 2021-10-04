import React from 'react';
import avatarImage from "../../assets/images/me.jpeg";


function About(){


    return(
        <section className ="my-5">
            <h2 id ="about">About Me</h2>
            <div>
            <img src={avatarImage} className="my-2" style={{ width: "100px", height:"100px" }} alt="avatar"></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    );
}

export default About;