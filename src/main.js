/**
 * Takoyaki Application Endpoint
 * ==============================
 *
 * File simply loading the client application.
 */
import React from 'react';
import {render} from 'react-dom';
import Application from './components/Application.jsx';

// Requiring style
import '../style/app.scss';

// Mount node
const MOUNT_NODE = document.getElementById('app');

// Function rendering the application
function renderApplication(Component) {
  render(<Component />, MOUNT_NODE);
}

// First render
renderApplication(Application);

// Handling HMR
if (module.hot) {

  // Reloading components
  module.hot.accept('./components/Application.jsx', () => {
    const NewApplication = require('./components/Application.jsx').default;
    renderApplication(NewApplication);
  });
}
