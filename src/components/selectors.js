/**
 * Takoyaki Selector Components
 * =============================
 *
 * Miscellaneous selectors for headers, recipes etc.
 */
import React from 'react';
import Select from 'react-select';
import cls from 'classnames';
import CLUSTERERS from '../definitions/clusterers';

/**
 * Helpers.
 */
function optionsFromStrings(strings) {
  return strings.map(string => {
    return {
      label: string,
      value: string
    };
  });
}

function optionsFromRecipes(recipes) {
  const options = [];

  for (const k in recipes) {
    options.push({
      label: recipes[k].label,
      value: recipes[k].id,
      recipe: recipes[k]
    });
  }

  return options;
}

/**
 * Headers selector.
 */
export function HeaderSelect(props) {
  const {
    headers,
    up = false,
    ...other
  } = props;

  const options = optionsFromStrings(headers);

  return (
    <div style={{width: '250px'}}>
      <Select
        className={cls(up && 'drop-up')}
        options={options}
        placeholder="Target column..."
        {...other} />
    </div>
  );
}

/**
 * Recipes selector.
 */
const SCALABILITIES = {
  low: <span><span className="red">Low</span> scalability</span>,
  medium: <span><span className="orange">Medium</span> scalability</span>,
  high: <span><span className="green">High</span> scalability</span>
};

function RecipeSelectOption(props) {
  const recipe = props.recipe,
        clusterer = CLUSTERERS[recipe.clusterer];

  return (
    <div className="recipe-option">
      <p><strong>{props.label}</strong></p>
      <div className="recipe-description">
        <p>{recipe.description}</p>
        <p>{SCALABILITIES[clusterer.scalability]}</p>
      </div>
    </div>
  );
}

export function RecipeSelect(props) {
  const {
    recipes,
    up = false,
    ...other
  } = props;

  const options = optionsFromRecipes(recipes);

  return (
    <div style={{width: '400px'}} className="recipe-selector">
      <Select
        className={cls(up && 'drop-up')}
        options={options}
        optionRenderer={RecipeSelectOption}
        placeholder="Recipe..."
        {...other} />
    </div>
  );
}
