/**
 * Takoyaki Application Component
 * ===============================
 *
 * Root-level component rendering the whole app.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UploadPage from './pages/upload/UploadPage';
import MainPage from './pages/main/MainPage';
import ClustersPage from './pages/clusters/ClustersPage';
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

    return actions.changeStep('main');
  };

  return (
    <main>
      <h1
        className="title is-3 main-title"
        onClick={handleTitleClick}>
        Takoyaki
      </h1>
      <RoutedComponent />
    </main>
  );
});
