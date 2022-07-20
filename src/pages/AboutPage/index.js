import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';

import './About.css';
import resume from '../../images/resume.pdf';
import { PageNavBar } from '../../components';

const AboutPage = () => {

    function onResumeClick() {
        window.open(resume);
    }

    return (

        // ----------- TO CENTER CONTENT TO MIDDLE OF PAGE --------------- //
        <div className="about-main-container">

            <PageNavBar />

            <div className="about-content-container">

                <div className="about-typewriter">

                    <TypeWriterEffect 
                        
                        textStyle={{
                            color: 'white',
                            fontSize: '22px',
                            lineHeight: '40px',
                            padding: '5px',
                            marginTop: '27px',

                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            textAlign: 'center',
                            textShadow: '0px 0px 20px 1px rgba(18, 74, 167, 1)',
                            
                        }}
                        multiText={[
                            "Multi-passionate individual with an insatiable curiosity for life and learning, an essential anti-aging strategy for the mind",
    
                            "Tech represents what I value most in life, change, evolution and growth. At its core it requires initiative, adaptation and curiosity which are individual skills I seek to continuously nurture and essentially master",
                            "",
                            "Experiencing freedom at its most optimum level is what truly motivates me. My goal is to utilise my skills to serve in the tech and creative industry, in exchange for expanding the ways in which I can embody a more fulfilling life grounded in time, space and financial freedom.",
                        ]}
                        cursorColor='white'
                        typeSpeed={80}
                        startDelay={0.1}
                        nextTextDelay={0.05}
                        loop={true}
                    />

                </div>

                <div className="about-button-container">
                    
                        <button type="about-button" 
                                className="landing-button" 
                                onClick={onResumeClick} 
                        >
                        <span className="about-text">VIEW FULL RESUME</span>
                        </button>

                </div> 

            </div>


        </div>

    );
};

export default AboutPage;