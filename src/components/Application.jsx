/**
 * Takoyaki Application Component
 * ===============================
 *
 * Main component of the application.
 */
import React from 'react';
import {Router, IndexRedirect, Route, hashHistory} from 'react-router';
import {Grid, Row, Col} from './bootstrap/grid.jsx';
import Steps from './steps.jsx';
import UploadPage from './pages/upload';

/**
 * Global layout of the application.
 */
function Layout({children}) {
  return (
    <Grid id="wrapper">
      <Row className="full-height no-gutters">
        <Col size={3} id="main-menu">
          <Steps />
        </Col>
        {children}
      </Row>
    </Grid>
  );
}

/**
 * Dummy component for testing.
 */
function Dummy() {
  return <div>Route...</div>;
}

/**
 * Application with router.
 */
export default function Application() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="/upload" />
        <Route path="/upload" component={UploadPage} />
      </Route>
    </Router>
  );
}
