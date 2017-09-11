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
import {format} from 'd3-format';

import Button from '../../Button';
import DownloadButton from '../../DownloadButton';
import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import {RecipeSelect} from '../../selectors';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as globalActions} from '../../../modules/global';
import {actions as mainActions, selectors as mainSelectors} from '../../../modules/main';
import {actions as recipesActions} from '../../../modules/recipes';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');
const SI_FORMAT = format(',.0s');

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      recipes: state.recipes,
      nbDistinctSelectedValues: mainSelectors.nbDistinctSelectedValues(state),
      estimate: mainSelectors.estimate(state)
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(mainActions, dispatch),
      globalActions: bindActionCreators(globalActions, dispatch),
      recipesActions: bindActionCreators(recipesActions, dispatch)
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
    this.createRecipe = this.createRecipe.bind(this);
    this.backToUpload = this.backToUpload.bind(this);
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

  createRecipe() {
    const {
      actions,
      recipesActions
    } = this.props;

    recipesActions.createRecipe();
    actions.changeStep('recipe');
  }

  backToUpload() {

    // TODO: modal warning that we will erase everything!
    this.props.globalActions.reset();
  }

  render() {
    const {
      actions,
      main,
      recipes,
      nbDistinctSelectedValues,
      estimate
    } = this.props;

    const canCluster = main.selectedRecipe && main.selectedHeader;

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="1.">
            Inspect your data (<span className="highlight">{NUMBER_FORMAT(main.data.length)}</span> rows) & select a column to work with
          </AffixTitle>
          <DataTable
            headers={main.headers}
            data={main.data}
            height={360}
            onClickHeader={this.selectHeader}
            selectedHeader={main.selectedHeader} />
          <br />
          <AffixTitle affix="2.">
            Select a recipe to apply {main.selectedHeader && <span>to the <span className="highlight">{main.selectedHeader}</span> column</span>}
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
                <Button disabled style={{marginRight: '5px'}}>Edit the recipe</Button>
                <Button onClick={this.createRecipe}>Create a custom recipe</Button>
              </LevelItem>
            </LevelLeft>
          </Level>
          {main.selectedRecipe && main.selectedHeader && (
            <p>
              Applying this recipe on <span className="highlight">{NUMBER_FORMAT(nbDistinctSelectedValues)}</span> distinct values requires
              running ~<span className="highlight">{SI_FORMAT(estimate)}</span> computations.
            </p>
          )}
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <Button
              outlined
              onClick={this.backToUpload}>
              Upload another file
            </Button>
          </LevelLeft>
          <LevelRight>
            <LevelItem>
              <Button
                disabled={!canCluster}
                loading={main.clustering}
                onClick={actions.runRecipe}>
                Cluster & Edit
              </Button>
              <DownloadButton />
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
