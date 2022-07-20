import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageNavBar.css';
import home from '../../images/home.gif';
import about from '../../images/about.gif';
import project from '../../images/project.gif';
import tech from '../../images/tech.gif';

const PageNavBar = () => {

    return (

        <nav>
            <div className='page-navbar'>
                <NavLink className="page-navlink-image" role="link" to="/">
                    <img 
                        src={home}
                        width="60"
                        height="60"
                        alt="Landing Page"
                        style={{
                            borderRadius:"90px",
                        }}
                    />
                    <h5 className="page-navlink-text">HOME</h5>
                </NavLink>

                <br></br>

                <NavLink className="page-navlink-image" role="link" to="/about">
                    <img 
                        src={about}
                        width="70"
                        height="70"
                        alt="About Page"
                        style={{
                            borderRadius:"90px",
                        }}
                    />
                    <h5 className="page-navlink-text">ABOUT</h5>
                </NavLink>

                <br></br>

                <NavLink className="page-navlink-image" role="link" to="/project">
                    <img 
                        src={project}
                        width="70"
                        height="70"
                        alt="Project Page"
                        style={{
                            borderRadius:"90px",
                        }}
                    />
                    <h5 className="page-navlink-text">PROJECTS</h5>
                </NavLink>

                <br></br>

                <NavLink className="page-navlink-image" role="link" to="/tech">
                    <img 
                        src={tech}
                        width="70"
                        height="70"
                        alt="Tech Stack Page"
                        style={{
                            borderRadius:"90px",
                        }}
                    />
                    <h5 className="page-navlink-text">STACK</h5>
                </NavLink>
            </div>

        </nav>

    );
};

export default PageNavBar;