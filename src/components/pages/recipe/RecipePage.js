/**
 * Takoyaki Recipe Page Component
 * ===============================
 *
 * Page enabling the user to create a custom clustering recipe.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions} from '../../../modules/main';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main
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
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions
    } = this.props;

    return (
      <div className="full-height">
        <section className="workspace recipe-editor">
          <div className="recipe-info">
            <div>
              <input
                className="recipe-title"
                placeholder="Recipe title..."
                type="text"
                value="My custom recipe" />
            </div>
            <div>
              <textarea
                className="recipe-description"
                placeholder="Recipe description..."
                value="Description of my custom clustering recipe" />
            </div>
          </div>
          <div className="string-preprocessing">
            <AffixTitle affix="1.">
              String preprocessing
            </AffixTitle>
            <p>
              First, you need to indicate how you want to preprocess your strings
              or even tokenize them.
            </p>
            <br />
          </div>
          <div className="clusterer">
            <AffixTitle affix="2.">
              Clustering algorithm
            </AffixTitle>
            <p>
              Then you need to select a clustering algorithm to use.
            </p>
            <br />
          </div>
          <div className="metric">
            <AffixTitle affix="3.">
              Metric
            </AffixTitle>
            <p>
              Some clustering algorithms need you to select a similarity
              metric.
            </p>
          </div>
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <LevelItem>
              <Button
                outlined
                onClick={() => actions.changeStep('main')}>
                Back
              </Button>
            </LevelItem>
          </LevelLeft>
          <LevelRight />
        </Level>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
