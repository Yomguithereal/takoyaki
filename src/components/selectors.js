/**
 * Takoyaki Selector Components
 * =============================
 *
 * Miscellaneous selectors for headers, recipes etc.
 */
import React from 'react';
import Select from 'react-select';
import cls from 'classnames';
import {replaceSingleCharacter} from './helpers';
import {sortedRecipes} from '../definitions/helpers';
import CLUSTERERS from '../definitions/clusterers';
import PREPROCESSORS from '../definitions/preprocessors';
import METRICS from '../definitions/metrics';

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

const LINEBREAK_REGEX = /<br>/g;

function displayLineBreaks(string) {
  return replaceSingleCharacter(string, LINEBREAK_REGEX, key => <br key={key} />);
}

function optionsFromRecipes(recipes) {
  recipes = sortedRecipes(recipes);

  return recipes.map(recipe => {
    return {
      label: recipe.label,
      value: recipe.id,
      recipe
    };
  });
}

function optionsFromPreprocessors() {
  const options = [];

  for (const k in PREPROCESSORS)
    options.push({
      label: PREPROCESSORS[k].label,
      value: k,
      preprocessor: PREPROCESSORS[k]
    });

  return options;
}

function optionsFromClusterers() {
  const options = [];

  for (const k in CLUSTERERS)
    options.push({
      label: CLUSTERERS[k].label,
      value: k,
      clusterer: CLUSTERERS[k]
    });

  return options;
}

function optionsFromMetrics(metrics, predicate) {
  const options = [];

  for (const k in metrics) {

    // Filtering
    if (predicate && !predicate(metrics[k]))
      continue;

    options.push({
      label: metrics[k].label,
      value: k,
      metric: metrics[k]
    });
  }

  return options;
}

const PREPROCESSOR_OPTIONS = optionsFromPreprocessors(),
      CLUSTERER_OPTIONS = optionsFromClusterers(),
      METRIC_OPTIONS = optionsFromMetrics(METRICS),
      TRUE_METRIC_OPTIONS = optionsFromMetrics(METRICS, m => m.trueMetric);

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
    <div style={{width: '400px'}} className="header-selector">
      <Select
        openOnFocus
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
      <p><strong>{props.label}</strong>{recipe.addedByUser && <span> *</span>}</p>
      <div className="recipe-description">
        <p>{recipe.description}</p>
        <p style={{marginTop: '5px'}}>{SCALABILITIES[clusterer.scalability]}</p>
      </div>
    </div>
  );
}

function RecipeSelectValue(props) {
  const recipe = props.recipe;

  return (
    <div>{props.label}{recipe.addedByUser && <span> *</span>}</div>
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
        openOnFocus
        className={cls(up && 'drop-up')}
        options={options}
        optionRenderer={RecipeSelectOption}
        valueRenderer={RecipeSelectValue}
        placeholder="Select a recipe..."
        {...other} />
    </div>
  );
}

/**
 * Preprocessors selector.
 */
const LANGUAGES = {
  fr: 'French'
};

const PREPROCESSOR_CATEGORIES = {
  normalizer: 'Normalizer',
  phonetics: 'Phonetic encoding',
  stemmer: 'Stemmer'
};

function PreprocessorSelectOption(props) {
  const preprocessor = props.preprocessor;

  return (
    <div className="preprocessor-option">
      <p>
        <strong>{props.label}</strong>
        <span className="preprocessor-category"> - {PREPROCESSOR_CATEGORIES[preprocessor.category]}</span>
        {preprocessor.language && <span className="preprocessor-language"> ({LANGUAGES[preprocessor.language]})</span>}
      </p>
      <div className="preprocessor-description">
        <p>{displayLineBreaks(preprocessor.description)}</p>
      </div>
    </div>
  );
}

export function PreprocessorSelect(props) {
  const {
    ...other
  } = props;

  return (
    <div style={{width: '600px'}} className="preprocessor-selector">
      <Select
        openOnFocus
        options={PREPROCESSOR_OPTIONS}
        optionRenderer={PreprocessorSelectOption}
        placeholder="Select a function to add..."
        {...other} />
    </div>
  );
}

/**
 * Clusterers selector.
 */
function ClustererSelectOption(props) {
  const clusterer = props.clusterer;

  return (
    <div className="clusterer-option">
      <p>
        <strong>{props.label}</strong>
      </p>
      <p className="clusterer-addendum">
        {SCALABILITIES[clusterer.scalability]} - {clusterer.complexity}
      </p>
    </div>
  );
}

export function ClustererSelect(props) {
  const {
    up = false,
    ...other
  } = props;

  return (
    <div style={{width: '600px'}} className="clusterer-selector">
      <Select
        openOnFocus
        clearable={false}
        className={cls(up && 'drop-up')}
        options={CLUSTERER_OPTIONS}
        optionRenderer={ClustererSelectOption}
        placeholder="Algorithms..."
        {...other} />
    </div>
  );
}

/**
 * Metrics selector.
 */
function MetricSelectOption(props) {
  const metric = props.metric;

  return (
    <div className="metric-option">
      <p>
        <strong>{props.label}</strong>
      </p>
      <p className="metric-addendum">
        {metric.description}
      </p>
    </div>
  );
}

export function MetricSelect(props) {
  const {
    up = false,
    trueMetrics = false,
    ...other
  } = props;

  const options = trueMetrics ? TRUE_METRIC_OPTIONS : METRIC_OPTIONS;

  return (
    <div style={{width: '600px'}} className="metric-selector">
      <Select
        openOnFocus
        clearable={false}
        className={cls(up && 'drop-up')}
        options={options}
        optionRenderer={MetricSelectOption}
        placeholder="Metrics..."
        {...other} />
    </div>
  );
}
