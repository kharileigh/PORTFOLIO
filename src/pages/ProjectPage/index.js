import React from 'react';
import { NavLink } from 'react-router-dom';

import './Project.css';
import elevate from '../../images/elevate.png';
import github from '../../images/github.png';
import habitat from '../../images/habitat.png';
import motive from '../../images/motive.png';
import unwind from '../../images/unwind.png';
import website from '../../images/website.png';




import { PageNavBar } from '../../components';

const ProjectPage = () => {

    return (

        // --------------------------------- TO CENTER CONTENT TO MIDDLE OF PAGE -------------------------- //
        <div className="project-main-container">

            <PageNavBar />

            {/* ------------------------------------ PROJECT INFO CARDS ----------------------------------- */}
            <div className="project-row">

                {/* --------------------- LAP 4: the.MOTIVE ------------------ */}
                <div className="project-content-container" >

                            <div className="project-card">

                                <div className="project-image-container">
                                    <img 
                                        className="project-image"
                                        src={motive}
                                        alt="3L3VAT3 Project"
                                        style={{
                                            borderRadius:"8px",
                                        }}
                                    />
                                </div>
                                
                                <div className="project-data">
                                    
                                    <h2 className="project-title">
                                        MOTIVE
                                    </h2>
                                    <div className="project-links">
                                        <a 
                                        className="external-link"  
                                        href="https://github.com/kharileigh/theMotive.git"
                                        aria-label="theMotive Repository"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={github} 
                                                width="30" 
                                                height="30" 
                                                alt="HABITAT GitHub Repository" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                        <br></br>
                                        <a 
                                        className="external-link"  
                                        href="https://the-motive-one.herokuapp.com/"
                                        aria-label="theMotive Website"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="HABITAT Deployed Website" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <p className="project-description">
                                    For those who thrive in spontaneity, the.MOTIVE is a mobile-first, local food and drink to keep your night going, by finding nearby venues based on your current geo-location.
                                    </p>
                                    <h3 className="project-technology">Technologies</h3>
                                    <h4 className="project-technologies">CSS, Flask, HTML, Heroku, JavaScript, Node.js, PostgresSQL, React, Redis, Redux, SQL Alchemy, SQL Lite </h4>
                                
                                </div>

                            </div>

                </div>

            </div>




            <div className="project-row">

                {/* --------------------- LAP 3: 3L3VAT3 ------------------ */}
                <div className="project-content-container" >

                            <div className="project-card">

                                <div className="project-image-container">
                                    <img 
                                        className="project-image"
                                        src={elevate}
                                        alt="3L3VAT3 Project"
                                        style={{
                                            borderRadius:"8px",
                                        }}
                                    />
                                </div>
                                
                                <div className="project-data">
                                    
                                    <h2 className="project-title">
                                        3L3VAT3
                                    </h2>
                                    <div className="project-links">
                                        <a 
                                        className="external-link" 
                                        href="https://github.com/kharileigh/3L3VAT3-.git"
                                        aria-label="3L3VAT3 Repository"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={github} 
                                                width="30" 
                                                height="30" 
                                                alt="HABITAT GitHub Repository" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                        <br></br>
                                        <a 
                                        className="external-link" 
                                        href="https://lap3-project-3l3vat3.herokuapp.com"
                                        aria-label="3L3VAT3 Website"
                                        rel="noopener"
                                        target="_blank">
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="HABITAT Deployed Website" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <p className="project-description">
                                    A competitive studying quiz app allowing authorised users to compete with fellow online users.
                                    </p>
                                    <h3 className="project-technology">Technologies</h3>
                                    <h4 className="project-technologies">Bootstrap, CSS, HTML, Mongoose, NPM, Node.js, JavaScript, Jest, React, Redux, Socket.io </h4>
                                
                                </div>

                            </div>

                </div>

            </div>



            <div className="project-row">
            {/* ------------------- LAP 2: HABITAT -------------------- */}
                <div className="project-content-container" id="lap-2">

                            <div className="project-card">

                                <div className="project-image-container">
                                    <img 
                                        className="project-image"
                                        src={habitat}
                                        alt="Unwind Project"
                                        style={{
                                            borderRadius:"8px",
                                        }}
                                    />
                                </div>
                                
                                <div className="project-data">
                                    
                                    <h2 className="project-title">
                                        HABITAT
                                    </h2>
                                    <div className="project-links">
                                        <a 
                                        className="external-link" 
                                        href="https://github.com/kharileigh/HABITAT.git"
                                        aria-label="HABITAT Repository"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={github} 
                                                width="30" 
                                                height="30" 
                                                alt="UNWIND GitHub Repository" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                        <br></br>
                                        <a 
                                        className="external-link" 
                                        href="https://github.com/kharileigh"
                                        aria-label="Khari - Leigh GitHub Repository"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="HABITAT Deployed Website" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <p className="project-description">
                                    A mobile-first app that allows users to keep track of their plants health.
                                    </p>
                                    <h3 className="project-technology">Technologies</h3>
                                    <h4 className="project-technologies">Bootstrap, HTML, CSS, JavaScript, Node.js, Express, Jest</h4>
                                
                                </div>

                            </div>

                </div>

            </div>

            <div className="project-row">
             {/* ------------------- LAP 1: UNWIND -------------------- */}

                <div className="project-content-container" id="lap-2">

                            <div className="project-card">

                                <div className="project-image-container">
                                    <img 
                                        id="project-unwind-image"
                                        className="project-image"
                                        src={unwind}
                                        alt="Unwind Project"
                                        style={{
                                            borderRadius:"8px",
                                            paddingLeft: "25px",
                                            paddingRight: "25px",
                                        }}
                                    />
                                </div>
                                
                                <div className="project-data">
                                    
                                    <h2 className="project-title">
                                        UNWIND
                                    </h2>
                                    <div className="project-links">
                                        <a 
                                        className="external-link" 
                                        href="https://github.com/kharileigh/unwind-one.git"
                                        aria-label="UNWIND Repository"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={github} 
                                                width="30" 
                                                height="30" 
                                                alt="UNWIND GitHub Repository" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                        <br></br>
                                        <a 
                                        className="external-link" 
                                        href="https://github.com/kharileigh"
                                        aria-label="Khari - Leigh Miller GitHub"
                                        rel="noopener"
                                        target="_blank"
                                        >
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="UNWIND Deployed Website" 
                                                style={{
                                                    borderRadius:"90px",
                                                    paddingTop: "3px",
                                                    
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <p className="project-description">
                                    Ever had those random thoughts that are on the borderline of a consipiracy or maybe the inner self talk that deserves external recoginition? Unwind is where you plant those seeds, safely and anonymously, for fellow curious minds to see on this community journaling website!
                                    </p>
                                    <h3 className="project-technology">Technologies</h3>
                                    <h4 className="project-technologies">HTML, CSS, JavaScript, Node.js, Express, Jest</h4>
                                
                                </div>

                            </div>

                </div>
            </div>



            




        </div>
    );
    
};

export default ProjectPage;