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
import {parseFile} from '../../../modules/main';
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
  return 'Drop your CSV file here...';
}

function renderActionBar(props, submit) {
  return (
    <Button
      kind="primary"
      onClick={submit}
      loadingText="Parsing..."
      loading={props.loading}
      disabled={!props.file.preview}>
      Parse file
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
        file: state.file,
        loading: state.main.parsing
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators({
          previewFile,
          parseFile
        }, dispatch)
      };
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
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.file = null;
  }

  onDrop(acceptedFiles) {
    const actions = this.props.actions,
          delimiter = this.props.file.delimiter;

    if (!acceptedFiles || !acceptedFiles.length)
      return;

    const file = acceptedFiles[0];
    this.file = file;

    actions.previewFile(file, delimiter);
  }

  onSubmit() {
    this.props.actions.parseFile(this.file, this.props.file.delimiter);
  }

  render() {
    const {file, loading} = this.props;

    return (
      <Page
        id="page-upload"
        title={TITLE}
        description={DESCRIPTION}
        actionBar={renderActionBar(this.props, this.onSubmit)}
        loading={loading}>
        <div className="dropzone">
          {!file.preview &&
            <Dropzone onDrop={this.onDrop} style={{margin: '20px', border: '2px dashed black'}}>
              {renderDropzone}
            </Dropzone>}
          {file.preview &&
            <div>
              <em>Does it look like your table? (Sampling 50 rows)</em>
              <Table
                data={file.preview}
                headers={file.headers} />
            </div>}
        </div>
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(UploadPage);
