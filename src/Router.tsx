import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import App from './App';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
