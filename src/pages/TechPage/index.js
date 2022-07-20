import React from 'react';
import { PageNavBar } from '../../components';

import './Tech.css';
import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import jquery from '../../images/jquery.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import nodejs from '../../images/nodejs.png';
import netlify from '../../images/netlify.png';
import python from '../../images/python.png';
import flask from '../../images/flask.png';
import docker from '../../images/docker.png';
import heroku from '../../images/heroku.png';



const TechPage = () => {

    return (

        // -------------------- TO CENTER CONTENT TO MIDDLE OF PAGE ------------- /
        <div className="tech-main-container">

            <PageNavBar />

            {/* --------------- TECH STACK IMAGE GRID ------------- */}
            <div className="tech-content-container">

                <div className="tech-stack-row">

                    {/* ---------- HTML -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={html}
                            width="80"
                            height="80"
                            alt="HTML Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>

                    {/* ---------- CSS -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={css}
                            width="80"
                            height="80"
                            alt="CSS Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>

                    {/* ---------- JAVASCRIPT -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={javascript}
                            width="80"
                            height="80"
                            alt="JavaScript Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>

                    {/* ---------- JQUERY -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={jquery}
                            width="80"
                            height="80"
                            alt="JQuery Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>
                
                </div>


                <div className="tech-stack-row">

                    {/* ---------- REACT -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={react}
                            width="80"
                            height="80"
                            alt="React Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>

                    {/* ---------- REDUX -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={redux}
                            width="80"
                            height="80"
                            alt="Redux Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>
                    
                    {/* ---------- NODEJS -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={nodejs}
                            width="80"
                            height="80"
                            alt="NodeJS Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>

                    {/* ---------- NETLIFY -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-stack"
                            src={netlify}
                            width="80"
                            height="80"
                            alt="Netlify Icon"
                            style={{
                                borderRadius:"15px",
                            }}
                        />
                    </div>
                
                </div>

                <div className="tech-stack-row">

                    {/* ---------- PYTHON -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={python}
                            width="80"
                            height="80"
                            alt="Python Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>

                    {/* ---------- FLASK -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={flask}
                            width="80"
                            height="80"
                            alt="Flask Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>
                    
                    {/* ---------- DOCKER -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={docker}
                            width="80"
                            height="80"
                            alt="Docker Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>
                    
                    {/* ---------- HEROKU -------- */}
                    <div className="tech-stack">
                        <img 
                            className="tech-icon"
                            src={heroku}
                            width="80"
                            height="80"
                            alt="Heroku Icon"
                            style={{
                                borderRadius:"8px",
                            }}
                        />
                    </div>
                
                </div>
            

                



            </div>

        </div>
    );
    
};

export default TechPage;