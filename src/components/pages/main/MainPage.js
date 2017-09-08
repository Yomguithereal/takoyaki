/**
 * Takoyaki Main Page Component
 * =============================
 *
 * Page displayed when the user is requested to select a column to work with
 * and a clustering recipe to apply.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import {RecipeSelect} from '../../selectors';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

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

    this.selectHeader = this.selectHeader.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
  }

  selectHeader(header) {
    if (!header)
      return;

    this.props.actions.selectHeader(header);
  }

  selectRecipe(option) {
    if (!option)
      return this.props.actions.selectRecipe(null);

    this.props.actions.selectRecipe(option.value);
  }

  render() {
    const {
      actions,
      main,
      recipes
    } = this.props;

    const canCluster = main.selectedRecipe && main.selectedHeader;

    // TODO: expected time to run and nb of computations

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="1.">
            Inspect your data ({main.data.length} rows) & select a column to work with
          </AffixTitle>
          <DataTable
            headers={main.headers}
            data={main.data}
            height={360}
            onClickHeader={this.selectHeader}
            selectedHeader={main.selectedHeader} />
          <br />
          <AffixTitle affix="2.">
            Select a recipe to apply {main.selectedHeader && `to the "${main.selectedHeader}" column`}
          </AffixTitle>
          <Level>
            <LevelLeft>
              <LevelItem>
                <RecipeSelect
                  up
                  recipes={recipes.recipes}
                  value={main.selectedRecipe}
                  onChange={this.selectRecipe} />
              </LevelItem>
              <LevelItem>
                <Button disabled>Create a custom recipe</Button>
              </LevelItem>
            </LevelLeft>
          </Level>
        </section>
        <Level className="action-bar">
          <LevelLeft />
          <LevelRight>
            <LevelItem>
              <Button
                disabled={!canCluster}
                loading={main.clustering}
                onClick={actions.runRecipe}>
                Cluster & Edit
              </Button>
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
