/**
 * Takoyaki Upload Page Component
 * ===============================
 *
 * Page displayed when the user is requested to upload a file.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import Button from '../../Button';

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
      mainActions: bindActionCreators(mainActions, dispatch)
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
      main
    } = this.props;

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="2.1">
            Inspect your data
          </AffixTitle>
          <DataTable
            headers={main.headers}
            data={main.data} />
        </section>
      </div>
    );
  };
}

export default connectToStore(UploadPage);
