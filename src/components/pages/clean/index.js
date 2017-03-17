/**
 * Takoyaki Clean Page
 * ====================
 *
 * Clean page main component.
 */
import React, {Component} from 'react';
import {compose} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../../Page.jsx';
import Table from '../../Table.jsx';
import Button from '../../bootstrap/Button.jsx';
import {computeClusters, changeTarget} from '../../../modules/main';

/**
 * Description.
 */
const TITLE = 'Cleaning the file & selecting cluster target';

const DESCRIPTION = (
  <p>
    <em>
      Now that we uploaded the file, this should be a good time to polish some
      of its rough edges before targeting a specific column to cluster.
    </em>
  </p>
);

/**
 * Helpers.
 */
function renderActionBar(props, submit) {
  const canCluster = !!(props.target && props.recipe);

  return (
    <Button
      kind="primary"
      disabled={!canCluster}
      onClick={submit}
      loadingText="Clustering...">
      Cluster
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
        data: state.main,
        loading: state.main.clustering,
        target: state.main.target,
        recipe: state.main.recipe
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators({
          computeClusters,
          changeTarget
        }, dispatch)
      };
    }
  )
);

/**
 * Main component.
 */
class CleanPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      data,
      loading,
      target,
      recipe
    } = this.props;

    return (
      <Page
        id="page-clean"
        title={TITLE}
        description={DESCRIPTION}
        loading={loading}
        actionBar={renderActionBar(this.props, actions.computeClusters)}>
        <div className="table-wrapper">
          <Table
            data={data.rows}
            headers={data.headers}
            onSelectHeader={actions.changeTarget}
            selectedHeader={target} />
        </div>
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(CleanPage);
