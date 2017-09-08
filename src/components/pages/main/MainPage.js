/**
 * Takoyaki Upload Page Component
 * ===============================
 *
 * Page displayed when the user is requested to upload a file.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import {RecipeSelect} from '../../selectors';

import {actions as mainActions} from '../../../modules/main';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      recipes: state.recipes
    };
  },
  dispatch => {
    return {
      mainActions: bindActionCreators(mainActions, dispatch)
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
      main,
      recipes
    } = this.props;

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="2.1">
            Inspect your data & select a column to work with
          </AffixTitle>
          <DataTable
            headers={main.headers}
            data={main.data}
            height={360} />
          <br />
          <AffixTitle affix="2.2">
            Select a recipe to apply
          </AffixTitle>
          <RecipeSelect recipes={recipes.recipes} up />
        </section>
        <div className="level action-bar">
          <div className="level-left" />
          <div className="level-right">
            <div className="level-item">
              <Button disabled>
                Cluster
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
