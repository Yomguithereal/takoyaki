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
import cls from 'classnames';

import {AutoSizer, List} from 'react-virtualized';
import ClusterInformation from './ClusterInformation';
import Button from '../../Button';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as mainActions, selectors as mainSelectors} from '../../../modules/main';

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
      main: state.main,
      recipe: mainSelectors.clusteredRecipeData(state),
      nextRecipe: mainSelectors.nextRecipeData(state)
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

    this.runNextRecipe = this.runNextRecipe.bind(this);
  }

  runNextRecipe() {
    const {
      actions,
      nextRecipe
    } = this.props;

    actions.selectRecipe(nextRecipe.id);
    actions.runRecipe();
  }

  render() {
    const {
      actions,
      main,
      recipe,
      nextRecipe,
      hidden = false
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
            Check the <span className="highlight">{NUMBER_FORMAT(main.clusters.size)}</span> clusters found
            by the <span className="highlight">{recipe.label}</span> recipe on
            the <span className="highlight">{main.clusteredHeader}</span> column
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
                    return 188 + (cluster.groups.length * 24);
                  }}
                  rowRenderer={({index, style}) => {
                    const cluster = main.clusters.get(index);

                    return (
                      <div key={cluster.key} style={style}>
                        <ClusterInformation
                          key={index}
                          index={index}
                          cluster={cluster}
                          explore={actions.explore}
                          updateHarmonizedValue={actions.updateHarmonizedValue}
                          harmonizeCluster={actions.harmonizeCluster}
                          dropCluster={actions.dropCluster} />
                      </div>
                    );
                  }} />
              );
            }}
          </AutoSizer>
        </div>
      );

    return (
      <div className={cls('full-height', hidden && 'hidden')}>
        <section className="workspace">
          {workspace}
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <LevelItem>
              <Button
                outlined
                onClick={() => actions.changeStep('main')}>
                Back
              </Button>
            </LevelItem>
          </LevelLeft>
          <LevelRight>
            <LevelItem>
              <Button
                loading={main.clustering}
                onClick={actions.runRecipe}>
                Re-cluster
              </Button>
            </LevelItem>
            <LevelItem>
              {nextRecipe ?
                (
                  <Button
                    onClick={this.runNextRecipe}>
                    Next recipe: "<em>{nextRecipe.label}</em>"
                  </Button>
                ) :
                (
                  <Button disabled>
                    No next recipe
                  </Button>
                )
              }
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(ClustersPage);
