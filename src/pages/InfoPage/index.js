import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Info.css';
import arrow from '../../images/next.gif';



const InfoPage = () => {

    const navigate = useNavigate();

    const handleAbout = () => {
        navigate('/about');
    }

    const handleProject = () => {
        navigate('/project');
    }

    const handleTech = () => {
        navigate('/tech');
    }


    return (

        <div className="info-main-container">


            <div className="info-content-container">

                {/* ------------------------------------ ABOUT ------------------------------------------------ */}
                <div className="about-container">
                    
                    <div className="info-button-container">
                    
                        <button type="button" 
                                className="landing-button" 
                                onClick={handleAbout} 
                        >
                        <span className="text">ABOUT ME</span>
                        </button>

                    </div>

                    <div className="info-icon-container">
                        <img 
                            src={arrow}
                            width="125"
                            height="150"
                            alt="Find Out More Arrow"
                            style={{
                                alignItems: 'center',
                                alignSelf: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '0',
                                marginTop: '-120px',
                            }}
                        />
                    </div>

                    <div className="info-brief-container">
                        <h2>
                            A freelance creative now transitioning into tech
                        </h2>
                    </div>

                </div>

                {/* ------------------------------------ PROJECTS -----------------------------------------------------*/}
                <div className="project-container">
                    
                    <div className="info-button-container">
                        
                        <button type="button" 
                                className="landing-button" 
                                onClick={handleProject} 
                        >
                        <span className="text">PROJECTS</span>
                        </button>

                    </div>

                    <div className="info-icon-container">
                        <img 
                            src={arrow}
                            width="125"
                            height="150"
                            alt="Find Out More Arrow"
                            style={{
                                alignItems: 'center',
                                alignSelf: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '0',
                                marginTop: '-120px',
                            }}
                        />
                    </div>

                    <div className="info-brief-container">
                        <h2>
                            A portfolio of full-stack web applications
                        </h2>
                    </div>

                </div>

                {/* ------------------------------------ TECH STACK ---------------------------------------------- */}
                <div className="stack-container">
                    
                    <div className="info-button-container">
                        
                        <button type="button" 
                                className="landing-button" 
                                onClick={handleTech} 
                        >
                        <span className="text">TECH STACK</span>
                        </button>

                    </div>

                    <div className="info-icon-container">
                        <img 
                            src={arrow}
                            width="125"
                            height="150"
                            alt="Find Out More Arrow"
                            style={{
                                alignItems: 'center',
                                alignSelf: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '0',
                                marginTop: '-120px',
                            }}
                        />
                    </div>

                    <div className="info-brief-container">
                        <h2>
                            A range of languages, libraries & frameworks
                        </h2>
                    </div>

                </div>

            </div>



        </div>

    );
};

export default InfoPage;