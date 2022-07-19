import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageNavBar.css';
import home from '../../images/home.gif';
import about from '../../images/about.gif';
import project from '../../images/project.gif';
import tech from '../../images/tech.gif';

const PageNavBar = () => {

    return (

        <nav className='page-navbar'>

            <NavLink className="page-navlink-image" role="link" to="/">
                <img 
                    scr={home}
                    width="50"
                    height="50"
                    alt="Landing Page"
                    style={{
                        borderRadius:"90px",
                    }}
                />
            </NavLink>

            <br></br>

            <NavLink className="page-navlink-image" role="link" to="/about">
                <img 
                    scr={about}
                    width="50"
                    height="50"
                    alt="About Page"
                    style={{
                        borderRadius:"90px",
                    }}
                />
            </NavLink>

            <br></br>

            <NavLink className="page-navlink-image" role="link" to="/project">
                <img 
                    scr={project}
                    width="50"
                    height="50"
                    alt="Project Page"
                    style={{
                        borderRadius:"90px",
                    }}
                />
            </NavLink>

            <br></br>

            <NavLink className="page-navlink-image" role="link" to="/tech">
                <img 
                    scr={tech}
                    width="50"
                    height="50"
                    alt="Tech Stack Page"
                    style={{
                        borderRadius:"90px",
                    }}
                />
            </NavLink>

        </nav>

    );
};

export default PageNavBar;