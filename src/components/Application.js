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

/**
 * Routing function.
 */
const router = step => {
  if (step === 'upload')
    return UploadPage;

  if (step === 'main')
    return MainPage;
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
    return bindActionCreators({}, dispatch);
  }
);

/**
 * Main component.
 */
export default connectToStore(function Application(props) {
  const {
    step
  } = props;

  const RoutedComponent = router(step);

  return (
    <main>
      <h1 className="title is-3">
        Takoyaki
      </h1>
      <RoutedComponent />
    </main>
  );
});
