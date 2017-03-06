/**
 * Takoyaki Upload Page
 * =====================
 *
 * Upload page main component.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {compose} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../../Page.jsx';
import Table from '../../Table.jsx';
import Button from '../../bootstrap/Button.jsx';
import {previewFile} from '../../../modules/file';

/**
 * Description.
 */
const TITLE = 'Uploading a file';

const DESCRIPTION = (
  <p>
    <em>
      First, we need to upload a file. For the time being, this tool only
      handles CSV files. You can drag & drop your file in the window below
      to preview it and tweak some options before we start
      working on it...
    </em>
  </p>
);

/**
 * Helpers.
 */
function renderDropzone() {
  return 'Drop your CSV file here...'
}

function renderActionBar(props) {
  return (
    <Button
      kind="primary"
      className="float-right"
      disabled={!props.file.preview}>
      Parse file
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
        file: state.file
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators({
          previewFile
        }, dispatch)
      }
    }
  )
);

/**
 * Main component.
 */
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);

    // Binding callbacks
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    const actions = this.props.actions;

    if (!acceptedFiles || !acceptedFiles.length)
      return;

    const file = acceptedFiles[0];

    actions.previewFile(file);
  }

  render() {
    const {file} = this.props;

    return (
      <Page
        id="page-upload"
        title={TITLE}
        description={DESCRIPTION}
        actionBar={renderActionBar(this.props)}>
        <div className="dropzone">
          {!file.preview &&
            <Dropzone onDrop={this.onDrop}>
              {renderDropzone}
            </Dropzone>}
          {file.preview &&
            <Table
              data={file.preview}
              headers={describeHeaders(file.headers)} />}
        </div>
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(UploadPage);
