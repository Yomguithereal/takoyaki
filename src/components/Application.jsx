/**
 * Takoyaki Application Component
 * ===============================
 *
 * Main component of the application.
 */
import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Grid, Row, Col} from './bootstrap/grid.jsx';
import Steps from './steps.jsx';
import UploadPage from './pages/upload';
import CleanPage from './pages/clean';

/**
 * Routes map.
 */
const MAP = {
  upload: UploadPage,
  clean: CleanPage
};

/**
 * Enhancer.
 */
const enhance = compose(
  connect(
    state => {
      return {
        step: state.step.current
      };
    }
  )
);

/**
 * Application component.
 */
function Application({step}) {
  const Page = MAP[step];

  return (
    <Grid id="wrapper">
      <Row className="full-height no-gutters">
        <Col size={3} id="main-menu">
          <Steps activeStep={step} />
        </Col>
        <Page />
      </Row>
    </Grid>
  );
}

/**
 * Exporting.
 */
export default enhance(Application);
