/**
 * Takoyaki Preprocessor Builder Component
 * ========================================
 *
 * Component aiming at building a preprocessing chain for the edited
 * clustering recipe.
 */
import React from 'react';
import Select from 'react-select';
import {compose, withState} from 'recompose';
import preprocessors from '../../../definitions/preprocessors';
import Button from '../../bootstrap/Button.jsx';
import {Row, Col} from '../../bootstrap/grid.jsx';

const OPTIONS = [];

for (const id in preprocessors) {
  OPTIONS.push({
    value: id,
    label: preprocessors[id].label,
    description: preprocessors[id].description
  });
}

function PreprocessorOption(props) {
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

function PreprocessorSelector(props) {
  const {
    selected,
    onChange
  } = props;

  return (
    <Select
      options={OPTIONS}
      optionRenderer={PreprocessorOption}
      value={selected}
      onChange={onChange} />
  );
}

const enhance = compose(
  withState(
    'selected',
    'setSelected',
    null
  )
);

export default enhance(function PreprocessorBuilder(props) {
  const {
    actions,
    selected,
    setSelected,
    recipe
  } = props;

  const {
    preprocessor = []
  } = recipe;

  return (
    <Row className="step-preprocessor">
      <Col size={6}>
        <PreprocessorSelector
          selected={selected}
          onChange={setSelected} />
        <Button
          kind="primary"
          disabled={!selected}
          onClick={() => actions.addPreprocessor(recipe.id, selected.value)}>
          Add
        </Button>
        <ul>
          {preprocessor.map((name, i) => {
            return (
              <li key={i}>{name}</li>
            );
          })}
        </ul>
      </Col>
      <Col size={6} />
    </Row>
  );
});
