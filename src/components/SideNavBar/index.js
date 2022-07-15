import React from 'react';
import './sidenavbar.css';

import github from '../../images/github-logo.png';
import linkedin from '../../images/linked-in-logo.png';

const SideNavBar = (props) => {

    return (

        <div className='sidenavbar'>

            <a href="">
                <img src={github} width="50" height="50" alt="GitHub Logo" />
            </a>
            <br></br>
            <a href="">
                <img src={linkedin} width="50" height="50" alt="LinkedIn Logo" />
            </a>
            <div className="navbar-text">
                <h1>
                J U N I O R 
                </h1>
                <br></br>
                <br></br>
                <h1>
                    D E V E L O P E R
                </h1>
            </div>

        </div>
    );
};

export default SideNavBar;