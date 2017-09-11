/**
 * Takoyaki Clusterer Component
 * =============================
 *
 * Clusterer part of the recipe creation.
 */
import React, {Component} from 'react';
import CLUSTERERS from '../../../definitions/clusterers';
import {CLUSTERER_DESCRIPTIONS} from '../../../definitions/descriptions';

import {ClustererSelect} from '../../selectors';
import AffixTitle from '../../AffixTitle';

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
      recipe
    } = this.props;

    const clusterer = CLUSTERERS[recipe.clusterer];

    return (
      <div className="clusterer">
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
        <div className="clusterer-description content">
          {CLUSTERER_DESCRIPTIONS[recipe.clusterer]}
        </div>
        {clusterer.needMetric && (
          <p>
            <strong>Note:</strong> this algorithm requires you to choose
            a similarity metric below.
          </p>
        )}
        <br />
      </div>
    );
  }
}
