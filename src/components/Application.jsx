/**
 * Takoyaki Application Component
 * ===============================
 *
 * Main component of the application.
 */
import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col} from './bootstrap/grid.jsx';
import Steps from './steps.jsx';
import UploadPage from './pages/upload';
import CleanPage from './pages/clean';
import {changeTarget, changeRecipe} from '../modules/main';

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
        headers: state.main.headers,
        recipe: state.main.recipe,
        target: state.main.target,
        step: state.main.current
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators({
          changeTarget,
          changeRecipe
        }, dispatch)
      };
    }
  )
);

/**
 * Application component.
 */
function Application(props) {
  const {
    actions,
    headers,
    step,
    recipe,
    target
  } = props;

  const Page = MAP[step];

  return (
    <Grid id="wrapper">
      <Row className="full-height no-gutters">
        <Col size={3} id="main-menu">
          <Steps
            actions={actions}
            activeStep={step}
            recipe={recipe}
            target={target}
            headers={headers} />
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
