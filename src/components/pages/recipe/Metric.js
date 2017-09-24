/**
 * Takoyaki Metric Component
 * ==========================
 *
 * Metric part of the recipe creation.
 */
import React, {Component} from 'react';
import METRICS from '../../../definitions/metrics';

import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {MetricSelect, HeaderSelect} from '../../selectors';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

/**
 * Formats.
 */
const DECIMAL_REGEX = /\./;

const DISTANCE_FORMAT = number => {
  let string = '' + number;

  if (DECIMAL_REGEX.test(string))
    return '' + (number.toFixed(2));

  return string;
};

/**
 * Main component.
 */
export default class Metric extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      recipe,
      headers,
      selectedHeader,
      selectHeader,
      sample,
      resample
    } = this.props;

    const [firstColumn, secondColumn] = sample;

    let metric;

    if (recipe.metric)
      metric = METRICS[recipe.metric].build();

    return (
      <div className="metric">
        <AffixTitle affix="3.">
          Similarity metric
        </AffixTitle>
        <MetricSelect
          value={recipe.metric}
          onChange={option => actions.selectMetric(option.value)} />
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
              <th>First string</th>
              <th>Distance</th>
              <th>Second string</th>
            </tr>
          </thead>
          <tbody>
            {firstColumn.map((value, i) => {
              let distance = '~';

              const otherValue = secondColumn[i];

              if (metric)
                distance = DISTANCE_FORMAT(metric(value, otherValue));

              return (
                <tr key={i}>
                  <td><code>{value}</code></td>
                  <td style={{textAlign: 'center'}}>{distance}</td>
                  <td><code>{secondColumn[i]}</code></td>
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
