import React from 'react';
import avatarImage from "../../assets/images/me.jpeg";


function About(){


    return(
        <section className ="my-5">
            <h2 id ="about">About Me</h2>
            <div>
            <img src={avatarImage} className="my-2" style={{ width: "100px", height:"100px" }} alt="avatar"></img>
            </div>
            <p>Hi, I'm Jessica (or Jess)! Thank you for taking the time to check
                out my portfolio. I am a newly-minted full stack web
                developer who loves a challenge and learning new things.
                A bit more about me: I am a communications professional
                with work experience in the legal field, an avid reader,
                lover of running and barre workouts, and am a shamelessly
                obsessed cat mom to a furry sweetheart named Cedar! Long story short,
                I wanted to pivot and make a career change, and here I am!
                <br />
                <br />
                Please feel free to click around and check out my work! And if you
                have any comments, questions, or just want to say hi, you can find my
                contact information below! Thank you for being here!
                <br />
            </p>
        </section>
    );
}

export default About;