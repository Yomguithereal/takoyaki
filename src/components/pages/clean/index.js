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
import {computeClusters} from '../../../modules/main';

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
  return (
    <Button
      kind="primary"
      className="float-right"
      onClick={submit}
      loadingText="Parsing...">
      Cluster
    </Button>
  );
}

function describeHeaders(headers) {
  return headers.map(header => {
    return {
      header,
      accessor: header
    };
  });
}

/**
 * Enhancer.
 */
const enhance = compose(
  connect(
    state => {
      return {
        data: state.main
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
class CleanPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {actions, data} = this.props;

    return (
      <Page
        id="page-clean"
        title={TITLE}
        description={DESCRIPTION}
        actionBar={renderActionBar(this.props, actions.computeClusters)}>
        <Table
          data={data.rows.slice(0, 30)}
          headers={describeHeaders(data.headers)} />
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(CleanPage);
