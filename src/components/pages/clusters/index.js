/**
 * Takoyaki Clusters Page
 * =======================
 *
 * Page showing the computed clusters in an orderly fashion.
 */
import React, {Component} from 'react';
import {compose} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../../Page.jsx';
import Table from '../../Table.jsx';
import Button from '../../bootstrap/Button.jsx';
import {computeClusters} from '../../../modules/main';
import {legibleClustersSelector} from '../../../selectors';

/**
 * Description.
 */
const TITLE = 'Computed clusters examination';

const DESCRIPTION = (
  <p>
    <em>
      Now that we found some clusters, what do you want to do with them?
    </em>
  </p>
);

/**
 * Helpers.
 */
function renderActionBar(props, submit) {
  return (
    <Button
      kind="primary"
      onClick={submit}
      loadingText="Clustering...">
      Re-Cluster
    </Button>
  );
}

/**
 * Enhancer.
 */
const enhance = compose(
  connect(
    state => {
      return {
        clusters: legibleClustersSelector(state)
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators({
          computeClusters
        }, dispatch)
      };
    }
  )
);

/**
 * Main component.
 */
class ClustersPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {actions, clusters} = this.props;

    return (
      <Page
        id="page-clusters"
        title={TITLE}
        description={DESCRIPTION}
        actionBar={renderActionBar(this.props, actions.computeClusters)}>
        <div className="table-wrapper">
          <h4>We found {clusters.length} clusters:</h4>
          <ul>
            {clusters.map((cluster, i) => {
              return (
                <li key={i}>
                  Cluster n°{i + 1} ({cluster.length} elements):
                  <ul>
                    {cluster.map(item => {
                      return <li key={item.value}>"{item.value}" ({item.rows.length} rows)</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(ClustersPage);
