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

import EXAMPLE_DATA from '../../../../data/figshare.csv';

import AffixTitle from '../../AffixTitle';
import DataTable from '../../DataTable';
import Button from '../../Button';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as globalActions} from '../../../modules/global';
import {actions as uploadActions} from '../../../modules/upload';
import {actions as mainActions} from '../../../modules/main';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      upload: state.upload
    };
  },
  dispatch => {
    return {
      actions: {
        upload: bindActionCreators(uploadActions, dispatch),
        main: bindActionCreators(mainActions, dispatch),
        global: bindActionCreators(globalActions, dispatch)
      }
    };
  }
);

/**
 * Main component.
 */
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadExampleFile = this.loadExampleFile.bind(this);
    this.reset = this.reset.bind(this);

    // Keeping track of the uploaded file
    this.file = null;
  }

  handleDrop(acceptedFiles) {
    const actions = this.props.actions;

    if (!acceptedFiles || !acceptedFiles.length)
      return;

    const file = acceptedFiles[0];
    this.file = file;

    actions.upload.previewData(file);
  }

  handleSubmit() {
    if (!this.file)
      return;

    const actions = this.props.actions;

    actions.main.parseData(this.file);

    this.file = null;
  }

  loadExampleFile() {
    const actions = this.props.actions;

    this.file = null;

    actions.main.parseData(EXAMPLE_DATA);
  }

  reset() {
    if (!this.file)
      return;

    this.file = null;
    this.props.actions.global.reset();
  }

  render() {
    const {
      main,
      upload
    } = this.props;

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="1">
            Upload a CSV file
          </AffixTitle>
          {!upload.previewData && (
            <div>
              <p>
              Or <a onClick={this.loadExampleFile}>load</a> our example of a messy file.
              </p>
              <br />
              <Dropzone
                className="dropzone"
                children="Click here to choose your file or drop it here..."
                onDrop={this.handleDrop} />
            </div>
          )}
          {upload.previewData && (
            <div>
              <AffixTitle affix="2">
                Check that your file is correctly parsed
              </AffixTitle>
              <p>
                Preview of the first <span className="highlight">{Math.min(100, upload.previewData.length)}</span> rows:
              </p>
              <br />
              <DataTable
                headers={upload.previewHeaders}
                data={upload.previewData} />
            </div>
          )}
        </section>
        <Level className="action-bar">
          <LevelLeft>
            {upload.previewData && (
              <LevelItem>
                <Button
                  outlined
                  onClick={this.reset}>
                  Upload another file
                </Button>
              </LevelItem>
            )}
          </LevelLeft>
          <LevelRight>
            {upload.previewData && (
              <LevelItem>
                <Button
                  loading={main.parsing}
                  onClick={this.handleSubmit}>
                  Parse the whole file
                </Button>
              </LevelItem>
            )}
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
