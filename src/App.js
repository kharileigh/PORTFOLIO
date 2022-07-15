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
                </Routes>
            </main>
        </div>
    )
}

export default App;