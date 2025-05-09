import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Preloader from './Shared/Preloader/Preloader';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import MaintenancePage from './Component1Default/MaintenancePage/MaintenancePage';

const helmetContext = {}; // Define helmetContext here

const container = document.getElementById('root');
const root = createRoot(container);
const isMaintenance = false;

root.render(
  <React.StrictMode>
    {isMaintenance ? (
      <MaintenancePage />
    ) : (
      <>
        {/* Ini bagian aslinya yang normal */}
        <HelmetProvider context={helmetContext}>
          <Preloader />
          <RouterProvider router={router} />
        </HelmetProvider>
      </>
    )}
  </React.StrictMode>
);
