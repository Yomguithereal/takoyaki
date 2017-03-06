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
function ClusteringRecipe({label}) {
  return <li className="clustering-recipe-item">{label}</li>;
}

/**
 * The clustering recipers list.
 */
function ClusteringRecipes() {
  return (
    <ul className="clustering-recipes">
      {recipes.map(recipe => {
        return <ClusteringRecipe key={recipe.key} label={recipe.label} />
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
export default function Steps({actions, headers, target, activeStep}) {

  return (
    <ul id="steps">
      <Step active={activeStep === 'upload'} text="1. Upload" />
      <Step active={activeStep === 'clean'} text="2. Clean" />
      <Step active={activeStep === 'cluster'} text="3. Cluster">
        <TargetColumnSelector
          selected={target}
          disabled={activeStep === 'upload'}
          columns={headers}
          onChange={actions.changeTarget} />
        <ClusteringRecipes />
      </Step>
      <Step active={activeStep === 'export'} text="4. Export" />
    </ul>
  );
}
