import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import MaintenancePage from './Component1Default/MaintenancePage/MaintenancePage';
import { UserFormProvider } from './UserFormContext';
import './index.css';
import './i18n';
import AppWrapper from './AppWrapper';

const helmetContext = {};
const container = document.getElementById('root');
const root = createRoot(container);
const isMaintenance = false;

root.render(
  <React.StrictMode>
    {isMaintenance ? (
      <MaintenancePage />
    ) : (
      <UserFormProvider>
        <HelmetProvider context={helmetContext}>
          <AppWrapper />
        </HelmetProvider>
      </UserFormProvider>
    )}
  </React.StrictMode>
);
