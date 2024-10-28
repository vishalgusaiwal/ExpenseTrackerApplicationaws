// client/src/MainRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
import NotFound from './components/NotFound'; // Import your NotFound component

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Add more routes as needed */}
                <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            </Routes>
        </Router>
    );
};

export default MainRouter;
