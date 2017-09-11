/**
 * Takoyaki Clusters Page Component
 * =================================
 *
 * Page exposing the harmonization interface.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ClusterInformation from './ClusterInformation';
import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions} from '../../../modules/main';

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

    if (!main.clusters || !main.clusters.length)
      workspace = (
        <h2 className="title is-4">
          Sorry, no clusters were found :(
        </h2>
      );
    else
      workspace = (
        <div>
          <AffixTitle affix="1.">
            Check the <span className="highlight">{main.clusters.length}</span> found clusters on
            column <span className="highlight">{main.clusteredHeader}</span>
          </AffixTitle>
          {main.clusters.map((data, i) => {
            return (
              <ClusterInformation
                key={i}
                number={i}
                data={data}
                explore={actions.explore} />
            );
          })}
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
