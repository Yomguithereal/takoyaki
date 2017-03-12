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
import Menu from './Menu.jsx';
import UploadPage from './pages/upload';
import CleanPage from './pages/clean';
import ClustersPage from './pages/clusters';
import {changeTarget, changeRecipe} from '../modules/main';

/**
 * Routes map.
 */
const MAP = {
  upload: UploadPage,
  clean: CleanPage,
  clusters: ClustersPage
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
        page: state.main.page
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
    page,
    recipe,
    target
  } = props;

  const Page = MAP[page];

  return (
    <Grid id="wrapper">
      <Row className="full-height no-gutters">
        <Col size={3} id="main-menu">
          <Menu
            actions={actions}
            activePage={page}
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
