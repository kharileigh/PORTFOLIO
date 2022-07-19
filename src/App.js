import React from "react";
import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';
import { SideNavBar } from './components';

import './index.css';


const App = () => {
    return (
        <div id="app">

            <main>

                <SideNavBar />
                <Routes>
                    <Route path="/" element={<Pages.LandingPage />} />
                        <Route path="/info" element={<Pages.InfoPage />} />
                        <Route path="/about" element={<Pages.AboutPage />} />
                        <Route path="/project" element={<Pages.ProjectPage />} />
                        <Route path="/tech" element={<Pages.TechPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;