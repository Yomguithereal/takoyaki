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
import StringPreprocessing from './StringPreprocessing';

import {actions as mainActions} from '../../../modules/main';
import {actions as recipeActions, selectors as recipeSelectors} from '../../../modules/recipes';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      recipe: recipeSelectors.editedRecipe(state)
    };
  },
  dispatch => {
    return {
      actions: {
        main: bindActionCreators(mainActions, dispatch),
        recipe: bindActionCreators(recipeActions, dispatch)
      }
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
      actions,
      recipe
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
                value={recipe.label}
                onChange={e => actions.recipe.updateTitle(e.target.value)} />
            </div>
            <div>
              <textarea
                className="recipe-description"
                placeholder="Recipe description..."
                value={recipe.description}
                onChange={e => actions.recipe.updateDescription(e.target.value)} />
            </div>
          </div>
          <StringPreprocessing />
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
              Some clustering algorithms require you to select a similarity
              metric.
            </p>
          </div>
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <LevelItem>
              <Button
                outlined
                onClick={() => actions.main.changeStep('main')}>
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
