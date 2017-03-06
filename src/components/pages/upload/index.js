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

/**
 * Enhancer.
 */
const enhance = compose(
  connect(
    state => {
      return {}
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

    // Building initial state
    this.state = {
      file: null
    };
  }

  onDrop(acceptedFiles) {
    const actions = this.props.actions;

    if (!acceptedFiles || !acceptedFiles.length)
      return;

    const file = acceptedFiles[0];

    actions.previewFile(file);
  }

  render() {
    return (
      <Page
        id="page-upload"
        title={TITLE}
        description={DESCRIPTION}>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop}>
            {renderDropzone}
          </Dropzone>
        </div>
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(UploadPage);
