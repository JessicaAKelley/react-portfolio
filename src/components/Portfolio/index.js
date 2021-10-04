import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from '../Project';
import projectArr from './projectArr.js';
import './portfolio.css';

function ProjectInfo(props) {
	return <div className="projectdata">{props.children}</div>;
}
function Portfolio () { 
	return (
        <section>
			<div className="project" id ="project">
				<h2 className="title"><i>Projects</i></h2>
				<hr></hr>
			</div>
			<ProjectInfo id="card-data">
				{projectArr.map((project) => (
					<Project key={project.id}  name={project.name} image ={project.image} github={project.github} deploy={project.deploy} topics={project.topics}/>
				))}
		</ProjectInfo>
    </section>
    );
}

export default Portfolio;