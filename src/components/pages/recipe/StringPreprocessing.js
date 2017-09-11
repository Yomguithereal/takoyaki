/**
 * Takoyaki String Preprocessing Component
 * ========================================
 *
 * String preprocessing part of the recipe creation.
 */
import React, {Component} from 'react';

import {PreprocessorSelect} from '../../selectors';
import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

export default class StringPreprocessing extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectValue: null
    };
  }

  handleChange(selectValue) {
    this.setState({selectValue});
  }

  render() {
    return (
      <div className="string-preprocessing">
        <AffixTitle affix="1.">
          String preprocessing
        </AffixTitle>
        <p>
          First, you need to indicate how you want to preprocess your strings
          or even tokenize them.
        </p>
        <br />
        <Level>
          <LevelLeft>
            <LevelItem>
              <PreprocessorSelect
                value={this.state.selectValue}
                onChange={this.handleChange} />
            </LevelItem>
            <LevelItem>
              <Button>Add</Button>
            </LevelItem>
          </LevelLeft>
        </Level>
        <br />
      </div>
    );
  }
}
