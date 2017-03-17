/**
 * Takoyaki Preprocessor Builder Component
 * ========================================
 *
 * Component aiming at building a preprocessing chain for the edited
 * clustering recipe.
 */
import React from 'react';
import Select from 'react-select';
import Button from '../../bootstrap/Button.jsx';
import {Row, Col} from '../../bootstrap/grid.jsx';

function PreprocessorSelector() {
  return (
    <Select
      />
  );
}

export default function PreprocessorBuilder() {
  return (
    <Row className="step-preprocessor">
      <Col size={6}>
        <PreprocessorSelector />
        <Button kind="primary">
          Add
        </Button>
      </Col>
      <Col size={6} />
    </Row>
  );
}
