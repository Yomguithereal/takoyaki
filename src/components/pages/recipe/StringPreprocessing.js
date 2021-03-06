/**
 * Takoyaki String Preprocessing Component
 * ========================================
 *
 * String preprocessing part of the recipe creation.
 */
import React, {Component} from 'react';
import PREPROCESSORS, {buildPreprocessorChain} from '../../../definitions/preprocessors';

import {PreprocessorSelect, HeaderSelect} from '../../selectors';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelItem} from '../../levels';

export default class StringPreprocessing extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.addPreprocessor = this.addPreprocessor.bind(this);

    this.state = {
      selectValue: null
    };
  }

  handleChange(selectValue) {
    if (!selectValue)
      return this.setState({selectValue: null});

    this.addPreprocessor(selectValue.value);
  }

  addPreprocessor(preprocessor) {
    if (!preprocessor)
      return;

    this.props.actions.addPreprocessor(preprocessor);
    this.setState({selectValue: null});
  }

  render() {
    const {
      actions,
      headers,
      selectHeader,
      selectedHeader,
      recipe,
      sample,
      resample
    } = this.props;

    const chain = buildPreprocessorChain(recipe.preprocessor);

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
          </LevelLeft>
        </Level>
        {recipe.preprocessor.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Function chain</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {recipe.preprocessor.map((preprocessorId, i) => {
                const preprocessor = PREPROCESSORS[preprocessorId];

                return (
                  <tr key={i}>
                    <td style={{width: '50%'}}>
                      <p>
                        {preprocessor.label}
                      </p>
                    </td>
                    <td style={{width: '50%'}}>
                      <a
                        className="remove-link"
                        onClick={() => actions.removePreprocessor(i)}>remove</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <br />
        <div>
          <Level>
            <LevelLeft>
              <LevelItem>
                <HeaderSelect
                  headers={headers}
                  onChange={option => selectHeader(option && option.value)}
                  value={selectedHeader} />
              </LevelItem>
              <LevelItem>
                &nbsp;<a onClick={resample}>resample</a>
              </LevelItem>
            </LevelLeft>
          </Level>
        </div>
        <br />
        <table className="sample">
          <thead>
            <tr>
              <th>Before</th>
              <th />
              <th>After</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((value, i) => {
              return (
                <tr key={i}>
                  <td>
                    <code className="show-whitespace">{value}</code>
                  </td>
                  <td>
                    ↣
                  </td>
                  <td className="after">
                    {[].concat(chain(value)).map((token, j) => {
                      return <code key={j} className="show-whitespace token">{token}</code>;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}
