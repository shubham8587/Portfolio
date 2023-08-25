import "./ProjectCard.css";
import React from 'react';
import ProjectCard from "./ProjectCard";
import ProWorkData from "./ProWorkData";

const ProWork = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {ProWorkData.map((val, ind) => {
                    return (
                        <ProjectCard key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProWork;