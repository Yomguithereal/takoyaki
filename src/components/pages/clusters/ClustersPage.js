/**
 * Takoyaki Clusters Page Component
 * =================================
 *
 * Page exposing the harmonization interface.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import cls from 'classnames';

import RecipeList from './RecipeList';
import ClusterList from './ClusterList';
import Button from '../../Button';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions, selectors as mainSelectors} from '../../../modules/main';
import {actions as recipeActions, selectors as recipeSelectors} from '../../../modules/recipes';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      availableRecipes: recipeSelectors.sortedRecipes(state),
      recipe: mainSelectors.clusteredRecipeData(state)
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
class ClustersPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.runSelectedRecipe = this.runSelectedRecipe.bind(this);
    this.sortClusters = this.sortClusters.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  runSelectedRecipe(recipeId) {
    const {
      actions,
      recipe,
    } = this.props;

    if (recipe && recipeId === recipe.id)
      return;

    actions.main.selectRecipe(recipeId);
    actions.main.runRecipe();
  }

  sortClusters(by) {
    const {
      actions,
      main
    } = this.props;

    const currentSorting = main.clustersSorting;

    if (currentSorting.by === by)
      return actions.main.sortClusters(by, currentSorting.order === 'asc' ? 'desc' : 'asc');

    let order = 'asc';

    if (by === 'rows')
      order = 'desc';

    return actions.main.sortClusters(by, order);
  }

  createRecipe() {
    const {
      actions
    } = this.props;

    actions.recipe.create();
    actions.main.changeStep('recipe');
  }

  editRecipe(recipe) {
    const {
      actions
    } = this.props;

    actions.recipe.select(recipe);
    actions.main.changeStep('recipe');
  }

  deleteRecipe(recipe) {
    const {
      actions
    } = this.props;

    actions.recipe.delete(recipe);
    // TODO: modal warning
  }

  render() {
    const {
      actions,
      main,
      availableRecipes,
      recipe,
      hidden = true
    } = this.props;

    const cardinality = (main.clusteredHeader && main.values) ?
      main.values[main.clusteredHeader].dimension :
      0;

    return (
      <div className={cls('full-height', hidden && 'hidden')}>
        <section className="full-height">
          <div className="columns is-gapless" style={{height: '100%'}}>
            <div className="column is-one-quarter" style={{height: '100%'}}>
              <RecipeList
                selectedRecipe={recipe}
                recipes={availableRecipes}
                cardinality={cardinality}
                selectRecipe={this.runSelectedRecipe}
                createRecipe={this.createRecipe}
                editRecipe={this.editRecipe}
                deleteRecipe={this.deleteRecipe} />
            </div>
            <div className="column" style={{height: '100%'}}>
              <ClusterList
                actions={actions.main}
                header={main.clusteredHeader}
                selectedRecipe={recipe}
                clusters={main.clusters}
                sort={this.sortClusters}
                sorting={main.clustersSorting} />
            </div>
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
          <LevelRight>
            <LevelItem>
              <Button
                loading={main.clustering}
                onClick={actions.main.runRecipe}>
                Re-cluster
              </Button>
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(ClustersPage);
