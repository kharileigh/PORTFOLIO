import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';

import './Landing.css';
import profile from '../../images/profile.png';

const LandingPage = () => {

    const navigate = useNavigate();

    const handleEntry = (e) => {
        navigate('/info');
    }

    return (

        // ----- TO CENTER CONTENT TO MIDDLE OF PAGE ------ //
        <div className="main-container">

            {/* ------ FOR IMAGE & TYPEWRITER | ALIGNED HORIZONTALLY ----- */}
            <div className="content-container">
             
                
                    
                <img 
                    fluid="true"
                    src={profile}
                    alt="Profile Picture"
                    width='220'
                    height='275'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginRight: 'auto',
                        borderRadius: '110px',
                        padding: '25px',
                    }}
                />
               

                <div className='typewriter'>

                    <TypeWriterEffect 
                    
                        textStyle={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.4em',
                            lineHeight: '31px',
                            padding: '5px',

                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            textAlign: 'center',
                            textShadow: '0px 0px 20px 1px rgba(18, 74, 167, 1)',
                             
                        }}
                        
                        multiText={[
                            "Hi! I'm Khari!",
                            "a spiritually conscious individual",
                            "seeking to merge",
                            "creativity, technology and purpose",
                        ]}
                        cursorColor='white'
                        typeSpeed={45}
                        startDelay={0.1}
                        nextTextDelay={0.1}
                        multiTextLoop={true}
                    />
   

                </div>

                <br></br>

                <div className="button-container">
                    
                        <button type="button" 
                                className="landing-button" 
                                onClick={handleEntry} 
                        >
                        <span className="text">Unpack My Story </span>
                        </button>

                </div> 
                

            </div> 

        </div>
    );
};

export default LandingPage;