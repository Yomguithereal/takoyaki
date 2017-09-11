/**
 * Takoyaki Clusterer Component
 * =============================
 *
 * Clusterer part of the recipe creation.
 */
import React, {Component} from 'react';
import CLUSTERERS from '../../../definitions/clusterers';

import {ClustererSelect} from '../../selectors';
import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

export default class Clusterer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(option) {
    this.props.actions.selectClusterer(option.value);
  }

  render() {
    const {
      actions,
      recipe
    } = this.props;

    const clusterer = CLUSTERERS[recipe.clusterer];

    return (
      <div className="string-preprocessing">
        <AffixTitle affix="2.">
          Clustering algorithm
        </AffixTitle>
        <p>
          Then you need to select a clustering algorithm to use.
        </p>
        <br />
        <ClustererSelect
          up
          value={recipe.clusterer}
          onChange={this.handleChange} />
        <br />
        <p>
          <em>{clusterer.description}</em>
        </p>
        <br />
        {clusterer.needMetric && (
          <p>
            <strong>Note:</strong> this algorithm requires you to choose
            a similarity metric below ▼.
          </p>
        )}
        <br />
      </div>
    );
  }
}
