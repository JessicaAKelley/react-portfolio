import React from 'react';
//import resumeFile from "../../assets/JessicaAKelley_Resume.pdf";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
            <div className="bottom-spacing">
				<a href={require("../../assets/files/JessicaAKelley_Resume.pdf")} download>
					<h4>Download My Resume</h4>
				</a>
			</div>
			<div>
                <h5>Front-End Skills and Proficiencies</h5>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ol>
            <br></br>
            <h5>Back-End Skills and Proficiencies</h5>
            <ol>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
            </ol>
            </div>
        </section>
    );
}

export default Resume;