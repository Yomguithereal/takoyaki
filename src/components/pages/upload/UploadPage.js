/**
 * Takoyaki Upload Page Component
 * ===============================
 *
 * Page displayed when the user is requested to upload a file.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';

import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import Button from '../../Button';

import {actions} from '../../../modules/upload';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      upload: state.upload
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
);

/**
 * Main component.
 */
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.onDrop = this.onDrop.bind(this);
    this.file = null;
  }

  onDrop(acceptedFiles) {
    const actions = this.props.actions;

    if (!acceptedFiles || !acceptedFiles.length)
      return;

    const file = acceptedFiles[0];
    this.file = file;

    actions.previewData(file);
  }

  render() {
    const {
      upload
    } = this.props;

    return (
      <div>
        <AffixTitle affix="1.1">
          Upload a CSV file
        </AffixTitle>
        {!upload.previewData && (
          <Dropzone
            className="dropzone"
            children="Click or drop your file here..."
            onDrop={this.onDrop} />
        )}
        {upload.previewData && (
          <div>
            <AffixTitle affix="1.2">
              Check that your file is correctly parsed
            </AffixTitle>
            Preview of the first <span className="highlight">{Math.min(50, upload.previewData.length)}</span> rows:
            <hr />
            <DataTable
              headers={upload.previewHeaders}
              data={upload.previewData} />
            <hr />
            <Button>Parse</Button>
          </div>
        )}
      </div>
    );
  };
}

export default connectToStore(UploadPage);
