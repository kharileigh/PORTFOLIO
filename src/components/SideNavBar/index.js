import React from 'react';

import './SideNavBar.css';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const SideNavBar = () => {

    return (

        <nav className='sidenavbar'>

            <a 
            className="navlink-image" 
            href="https://github.com/kharileigh"
            aria-label="Khari - Leigh Miller GitHub"
            rel="noreferrer"
            target="_blank"
            >
                <img 
                    src={github} 
                    width="50" 
                    height="50" 
                    alt="kharileigh GitHub Profile" 
                    style={{
                        borderRadius:"90px",
                    }}
                />
            </a>

            <br></br>

            <a 
            className="navlink-image" 
            href="https://www.linkedin.com/in/khari-leigh-miller/?trk=people-guest_people_search-card&challengeId=AQGJJxeZNUkoagAAAX_xrrawlVWvErFYFg8oWw7gIs8x5ASKdjtN6EFESuLQR-M_i9dHRLymsetYm9yFaMyF-fn8TbppeK6Ztg&submissionId=1d31b615-8885-e216-7e03-bddc371d8655&original_referer=&originalSubdomain=uk"
            aria-label="Khari - Leigh Miller LinkedIn Profile"
            rel="noreferrer"
            target="_blank"
            >
                <img 
                    src={linkedin} 
                    width="50" 
                    height="50" 
                    alt="Khari-Leigh Miller LinkedIn Profile" 
                />
            </a>

            <header className="navbar-text">
                
                <h1>
                J U N I O R 
                <br></br> 
                <br></br>
                D E V E L O P E R
                </h1>
        
            </header>

        </nav>
    );
};

export default SideNavBar;