import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './Router';

import './i18n/configs';

import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
