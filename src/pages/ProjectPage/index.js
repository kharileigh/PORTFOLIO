import React from 'react';

import './Project.css';
import elevate from '../../images/elevate.png';
import github from '../../images/github.png';
import habitat from '../../images/habitat.png';
import metro from '../../images/centralmetrosystem.png';
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

                {/* --------------------- Wiley Edge Final Project : Central Metro System ------------------ */}
                <div className="project-content-container" >

                            <div className="project-card">

                                <div className="project-image-container">
                                    <img 
                                        className="project-image"
                                        src={metro}
                                        alt="Central Metro System Project"
                                        style={{
                                            borderRadius:"8px",
                                        }}
                                    />
                                </div>
                                
                                <div className="project-data">
                                    
                                    <h2 className="project-title">
                                        CENTRAL METRO SYSTEM
                                    </h2>
                                    <div className="project-links">
                                        <a 
                                        className="external-link"  
                                        href="https://github.com/kharileigh/MetroSystem.git"
                                        aria-label="Central Metro System Repository"
                                        rel="noreferrer"
                                        target="_blank"
                                        >
                                            <img 
                                                src={github} 
                                                width="30" 
                                                height="30" 
                                                alt="Central Metro System GitHub Repository" 
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
                                        rel="noreferrer"
                                        target="_blank"
                                        >
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="Khari - Leigh GitHub Repository" 
                                                style={{
                                                    borderRadius:"90px",
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <p className="project-description">
                                    A mobile application that makes travelling simple by swiping in and out, straight from your device.
                                    </p>
                                    <h3 className="project-technology">Technologies</h3>
                                    <h4 className="project-technologies"> CSS, HTML, Java, MySQL, REST API, SpringBoot, SQL </h4>
                                
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
                                        rel="noreferrer"
                                        target="_blank"
                                        >
                                            <img 
                                                src={github} 
                                                width="30" 
                                                height="30" 
                                                alt="3L3VAT3 GitHub Repository" 
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
                                        rel="noreferrer"
                                        target="_blank">
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="3l3VAT3 Deployed Website" 
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
                                        alt="HABITAT Project"
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
                                        aria-label="HABITAT GitHub Repository"
                                        rel="noreferrer"
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
                                        rel="noreferrer"
                                        target="_blank"
                                        >
                                            <img 
                                                src={website} 
                                                width="30" 
                                                height="30" 
                                                alt="Khari - Leigh GitHub Repository" 
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
                                        aria-label="UNWIND GitHub Repository"
                                        rel="noreferrer"
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
                                        rel="noreferrer"
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