/**
 * Takoyaki Clean Page
 * ====================
 *
 * Clean page main component.
 */
import React, {Component} from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import Page from '../../Page.jsx';
import Table from '../../Table.jsx';

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
function renderActionBar() {
  return null;
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
    const {data} = this.props;

    return (
      <Page
        id="page-clean"
        title={TITLE}
        description={DESCRIPTION}
        actionBar={renderActionBar(this.props, this.onSubmit)}>
        <Table
          data={data.rows}
          headers={describeHeaders(data.headers)}
          defaultPageSize={12} />
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(CleanPage);
