import React from "react";
import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';
// import { TestComponent } from './components';

import './index.css';

const App = () => {
    return (
        <div id="app">

            <main>
                <Routes>
                    <Route path="/" element={<Pages.LandingPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;