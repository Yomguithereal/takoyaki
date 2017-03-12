/**
 * Takoyaki Steps Component
 * =========================
 *
 * Component displaying the steps of the application on the left.
 */
import React from 'react';
import cls from 'classnames';
import Select from 'react-select';
import recipes from '../definitions/recipes';

/**
 * Target column selector.
 */
function TargetColumnSelector(props) {
  const {
    disabled,
    selected,
    columns,
    onChange
  } = props;

  const options = columns.map(name => {
    return {
      value: name,
      label: name
    };
  });

  return (
    <Select
      placeholder="Select target column..."
      disabled={disabled}
      options={options}
      value={selected}
      onChange={onChange} />
  );
}

/**
 * A single clustering recipe.
 */
function ClusteringRecipe({active, label, onClick}) {
  return (
    <li
      className={cls('clustering-recipe-item', active && 'active')}
      onClick={onClick}>
      {label}
    </li>
  );
}

/**
 * The clustering recipers list.
 */
function ClusteringRecipes({selected, changeRecipe}) {
  return (
    <ul className="clustering-recipes">
      {recipes.map(recipe => {
        return (
          <ClusteringRecipe
            active={selected === recipe}
            key={recipe.key}
            label={recipe.label}
            onClick={() => changeRecipe(recipe)} />
        );
      })}
    </ul>
  );
}

/**
 * A single step.
 */
function Step({active, text, children}) {
  const classes = cls(active && 'active');

  return (
    <li className={classes}>
      <div className="step-item">
        {text}
      </div>
      {children}
    </li>
  );
}

/**
 * The step list.
 */
export default function Steps(props) {
  const {
    actions,
    headers,
    target,
    recipe,
    activeStep
  } = props;

  return (
    <ul id="steps">
      <Step active={activeStep === 'upload'} text="1. Upload" />
      <Step active={activeStep === 'clean'} text="2. Clean & Cluster">
        <TargetColumnSelector
          selected={target}
          disabled={activeStep === 'upload'}
          columns={headers}
          onChange={actions.changeTarget} />
        <ClusteringRecipes
          selected={recipe}
          changeRecipe={actions.changeRecipe} />
      </Step>
      <Step active={activeStep === 'export'} text="3. Export" />
    </ul>
  );
}
