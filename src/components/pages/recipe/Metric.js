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
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

export default class Metric extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      recipe
    } = this.props;

    return (
      <div className="metric">
        <AffixTitle affix="3.">
          Similarity metric
        </AffixTitle>
        <br />
      </div>
    );
  }
}
