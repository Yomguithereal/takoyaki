/**
 * Takoyaki Exploration Page Component
 * ====================================
 *
 * Page used to explore the given cluster.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {format} from 'd3-format';

import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions} from '../../../modules/main';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');

/**
 * Helpers.
 */
const collectRows = (data, cluster) => {
  const rows = [];

  for (let i = 0, l = cluster.length; i < l; i++)
    rows.push.apply(rows, cluster[i].rows);

  return rows;
};

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(mainActions, dispatch)
    };
  }
);

/**
 * Main component.
 */
class ExplorationPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      main
    } = this.props;

    const cluster = main.clusters[main.exploredCluster];

    const rows = collectRows(main.data, cluster.groups);

    // TODO: use a radix sort
    rows.sort((a, b) => a - b);

    const data = rows.map(row => main.data[row]);

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="1.">
            Explore cluster n°{main.exploredCluster + 1} containing <span className="highlight">{NUMBER_FORMAT(cluster.groups.length)}</span>
            &nbsp;distinct values for <span className="highlight">{main.selectedHeader}</span>
            &nbsp;over <span className="highlight">{NUMBER_FORMAT(cluster.nbRows)}</span> rows:
          </AffixTitle>
          <DataTable
            headers={main.headers}
            selectedHeader={main.selectedHeader}
            data={data}
            rows={rows} />
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <LevelItem>
              <Button
                outlined
                onClick={() => actions.changeStep('clusters')}>
                Back
              </Button>
            </LevelItem>
          </LevelLeft>
          <LevelRight>
            <LevelItem>
              <Button
                disabled>
                Previous cluster
              </Button>
            </LevelItem>
            <LevelItem>
              <Button
                disabled>
                Next cluster
              </Button>
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(ExplorationPage);
