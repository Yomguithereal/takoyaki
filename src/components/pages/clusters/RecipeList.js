/**
 * Takoyaki Recipe List Component
 * ===============================
 *
 * Component listing the available recipe that the user can apply.
 */
import React, {Component} from 'react';
import {format} from 'd3-format';
import cls from 'classnames';

import CLUSTERERS from '../../../definitions/clusterers';

/**
 * Formats.
 */
const SI_FORMAT = format(',.0s');

const COMPUTATIONS_FORMAT = nb => {
  if (nb < 1000)
    return '' + (nb | 0);

  return SI_FORMAT(nb);
};

/**
 * A single recipe.
 */
function Recipe(props) {
  const {
    cardinality,
    recipe,
    selectRecipe,
    selected = false
  } = props;

  const clusterer = CLUSTERERS[recipe.clusterer];

  const computations = clusterer.estimate(cardinality);

  return (
    <ul
      className={cls('recipe', selected && 'selected')}
      onClick={() => selectRecipe(recipe.id)}>
      <div>
        <h6 className="title is-6">{recipe.label}</h6>
        <div className="content">
          <p className="recipe-description">
            {recipe.description}
          </p>
          <p className="recipe-description">
            Running this recipe requires approx. <span className="highlight">{COMPUTATIONS_FORMAT(computations)}</span>
            &nbsp;computations.
          </p>
        </div>
      </div>
    </ul>
  );
}

/**
 * Main component.
 */
export default class RecipeList extends Component {
  render() {
    const {
      cardinality,
      recipes,
      selectedRecipe,
      selectRecipe
    } = this.props;

    return (
      <ul className="recipe-list">
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              cardinality={cardinality}
              recipe={recipe}
              selected={selectedRecipe && selectedRecipe.id === recipe.id}
              selectRecipe={selectRecipe} />
          );
        })}
      </ul>
    );
  }
}
