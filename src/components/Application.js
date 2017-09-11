/**
 * Takoyaki Application Component
 * ===============================
 *
 * Root-level component rendering the whole app.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tooltip from 'react-tooltip';

import IconBar from './IconBar';
import UploadPage from './pages/upload/UploadPage';
import MainPage from './pages/main/MainPage';
import ClustersPage from './pages/clusters/ClustersPage';
import ExplorationPage from './pages/exploration/ExplorationPage';
import RecipePage from './pages/recipe/RecipePage';

import {actions as mainActions} from '../modules/main';

/**
 * Routing function.
 */
const router = step => {
  if (step === 'upload')
    return UploadPage;

  if (step === 'main')
    return MainPage;

  if (step === 'clusters')
    return ClustersPage;

  if (step === 'exploration')
    return ExplorationPage;

  if (step === 'recipe')
    return RecipePage;
};

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      step: state.main.step
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(mainActions, dispatch)
    };
  }
);

/**
 * Main component.
 */
export default connectToStore(function Application(props) {
  const {
    step,
    actions
  } = props;

  const RoutedComponent = router(step);

  const handleTitleClick = () => {
    if (step === 'upload')
      return;

    if (step === 'main')
      return;

    return actions.changeStep('main');
  };

  return (
    <main>
      <div className="columns app-wrapper">
        <aside className="app-aside">
          <IconBar step={step} />
        </aside>
        <section className="app-section">
          <h1
            className="title is-3 main-title"
            onClick={handleTitleClick}>
            Takoyaki
          </h1>
          <RoutedComponent />
        </section>
      </div>
      <Tooltip effect="solid" place="right" />
    </main>
  );
});
