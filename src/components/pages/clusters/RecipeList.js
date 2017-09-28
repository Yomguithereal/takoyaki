/**
 * Takoyaki Recipe List Component
 * ===============================
 *
 * Component listing the available recipe that the user can apply.
 */
import React, {Component} from 'react';
import {format} from 'd3-format';
import cls from 'classnames';

import Button from '../../Button';

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
    editRecipe,
    deleteRecipe,
    selected = false
  } = props;

  const clusterer = CLUSTERERS[recipe.clusterer];

  const computations = clusterer.estimate(cardinality);

  const handleEditRecipe = e => {
    e.stopPropagation();

    editRecipe(recipe.id);
  };

  const handleDeleteRecipe = e => {
    e.stopPropagation();

    deleteRecipe(recipe.id);
  };

  return (
    <li
      className={cls('recipe', selected && 'selected')}
      onClick={() => selectRecipe(recipe.id)}>
      <div>
        <h6 className="title is-6">{recipe.label}</h6>
        <div className="content">
          <p className="recipe-description">
            {recipe.description}
          </p>
          <p className="recipe-description">
            Running this recipe requires ~ <span className="highlight">{COMPUTATIONS_FORMAT(computations)}</span>
            &nbsp;computations.
          </p>
          {recipe.addedByUser && (
            <div className="recipe-description">
              <a onClick={handleEditRecipe}>edit</a>, <a onClick={handleDeleteRecipe}>delete</a>
            </div>
          )}
        </div>
      </div>
    </li>
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
      selectRecipe,
      createRecipe,
      editRecipe,
      deleteRecipe
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
              selectRecipe={selectRecipe}
              editRecipe={editRecipe}
              deleteRecipe={deleteRecipe} />
          );
        })}
        <li>
          <Button onClick={createRecipe} style={{width: '100%'}}>
            Create a custom recipe
          </Button>
        </li>
      </ul>
    );
  }
}
