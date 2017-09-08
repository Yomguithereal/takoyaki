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
import DataTable from '../../DataTable';
import {RecipeSelect} from '../../selectors';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions} from '../../../modules/main';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      recipes: state.recipes
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
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      main,
      recipes
    } = this.props;

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="1.">
            Check the <span className="highlight">{main.clusters.length}</span> found clusters on
            column "{main.clusteredHeader}"
          </AffixTitle>
          {main.clusters.map((data, i) => {
            return (
              <ClusterInformation
                key={i}
                number={i}
                data={data} />
            );
          })}
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

export default connectToStore(UploadPage);
