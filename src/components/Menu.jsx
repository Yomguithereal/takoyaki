/**
 * Takoyaki Menu Component
 * ========================
 *
 * Component displaying the steps of the application on the left.
 */
import React from 'react';
import cls from 'classnames';
import {values} from 'ramda';
import Select from 'react-select';
import Button from './bootstrap/Button.jsx';

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
      onChange={o => onChange(o ? o.value : null)} />
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
function ClusteringRecipes({selected, recipes, changeRecipe}) {
  return (
    <ul className="clustering-recipes">
      {values(recipes).map((recipe, i) => {
        return (
          <ClusteringRecipe
            active={selected === recipe.id}
            key={i}
            label={recipe.label}
            onClick={() => changeRecipe(recipe.id)} />
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
export default function Menu(props) {
  const {
    actions,
    headers,
    target,
    activeRecipe,
    recipes,
    activePage
  } = props;

  const canCluster = activePage !== 'upload';

  return (
    <ul id="steps">
      <Step active={activePage === 'upload'} text="1. Upload" />
      <Step active={activePage === 'clusters' || activePage === 'clean'} text="2. Clean & Cluster">
        {canCluster &&
          <div className="clustering-submenu">
            <TargetColumnSelector
              selected={target}
              disabled={activePage === 'upload'}
              columns={headers}
              onChange={actions.changeTarget} />
            <ClusteringRecipes
              recipes={recipes}
              selected={activeRecipe}
              changeRecipe={actions.changeRecipe} />
            <Button size="sm" onClick={actions.createRecipe}>Create Recipe</Button>
          </div>}
      </Step>
      <Step active={activePage === 'export'} text="3. Export" />
    </ul>
  );
}
