/**
 * Takoyaki Clusters Page Component
 * =================================
 *
 * Page exposing the harmonization interface.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {format} from 'd3-format';

import {AutoSizer, List} from 'react-virtualized';
import ClusterInformation from './ClusterInformation';
import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions} from '../../../modules/main';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');

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
class ClustersPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      main,
      state
    } = this.props;

    let workspace;

    if (!main.clusters || !main.clusters.size)
      workspace = (
        <h2 className="title is-4">
          Sorry, no clusters were found :(
        </h2>
      );
    else
      workspace = (
        <div style={{height: '100%'}}>
          <AffixTitle affix="1.">
            Check the <span className="highlight">{NUMBER_FORMAT(main.clusters.size)}</span> found clusters on
            column <span className="highlight">{main.clusteredHeader}</span>
          </AffixTitle>
          <AutoSizer>
            {({width, height}) => {

              // NOTE: subtracting 51 to get action bar out of the way
              return (
                <List
                  width={width}
                  height={height - 51}
                  rowCount={main.clusters.size}
                  rowHeight={({index}) => {
                    const cluster = main.clusters.get(index);

                    // Estimated height in pixels
                    return 145 + (cluster.groups.length * 24);
                  }}
                  rowRenderer={({index, style}) => {
                    const cluster = main.clusters.get(index);

                    return (
                      <div key={cluster.key} style={style}>
                        <ClusterInformation
                          key={cluster.key}
                          number={cluster.key}
                          cluster={cluster}
                          explore={actions.explore}
                          updateHarmonizedValue={actions.updateHarmonizedValue} />
                      </div>
                    );
                  }} />
              );
            }}
          </AutoSizer>
        </div>
      );

    return (
      <div className="full-height">
        <section className="workspace">
          {workspace}
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <LevelItem>
              <Button
                outlined
                onClick={() => actions.changeStep('main')}>
                Change recipe
              </Button>
            </LevelItem>
          </LevelLeft>
          <LevelRight>
            <LevelItem>
              <Button
                disabled>
                Harmonize & Re-cluster
              </Button>
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(ClustersPage);
