/**
 * Takoyaki Clustering Method Component
 * =====================================
 *
 * Component aiming at selecting the clustering method for the edited recipe.
 */
import React from 'react';
import Select from 'react-select';
import clusterers from '../../../definitions/clusterers';

const OPTIONS = [];

for (const id in clusterers) {
  OPTIONS.push({
    value: id,
    label: clusterers[id].label,
    description: clusterers[id].description
  });
}

function ClustererOption(props) {
  const {
    label,
    description
  } = props;

  return (
    <div>
      {label}
      <p className="description">
        {description}
      </p>
    </div>
  );
}

function ClustererSelector(props) {
  const {
    selected,
    onChange
  } = props;

  return (
    <Select
      options={OPTIONS}
      optionRenderer={ClustererOption}
      value={selected}
      onChange={option => onChange(option.value)} />
  );
}

export default function ClusteringMethodSelector(props) {
  const {
    actions,
    recipe
  } = props;

  return (
    <ClustererSelector
      selected={recipe.clusterer}
      onChange={value => actions.changeClusterer(recipe.id, value)} />
  );
}
