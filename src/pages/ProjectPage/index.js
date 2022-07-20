import React from 'react';

import './Project.css';
import { PageNavBar } from '../../components';

const ProjectPage = () => {

    return (

        // ------------ TO CENTER CONTENT TO MIDDLE OF PAGE ----------------- //
        <div className="project-main-container">

            <PageNavBar />

            {/* ------------- PROJECT INFO CARDS -------------- */}
            <div className="project-content-container">

                {/* -------- LAP 1 ----------- */}
                <div className="flip-card">

                    <div className="flip-card-inner">

                        <div className="flip-card-front">

                            <img />
                            <h3> This is what the project is about</h3>
                            <h1> PROJECT NAME </h1>

                        </div>
                        <div className="flip-card-back">

                            <img />
                            <h3></h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
    
};

export default ProjectPage;