/**
 * Takoyaki Main Page Component
 * =============================
 *
 * Page displayed when the user is requested to select a column to work with.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ColumnCard from './ColumnCard';
import Button from '../../Button';
import DownloadButton from '../../DownloadButton';
import AffixTitle from '../../AffixTitle';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';

import {actions as globalActions} from '../../../modules/global';
import {actions as mainActions, selectors as mainSelectors} from '../../../modules/main';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      sortedValues: mainSelectors.sortedValues(state)
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(mainActions, dispatch),
      globalActions: bindActionCreators(globalActions, dispatch)
    };
  }
);

/**
 * Main component.
 */
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.selectHeader = this.selectHeader.bind(this);
    this.backToUpload = this.backToUpload.bind(this);
  }

  selectHeader(header) {
    const {
      actions
    } = this.props;

    actions.selectHeader(header);
    actions.runRecipe();
    actions.changeStep('clusters');
  }

  backToUpload() {

    // TODO: modal warning that we will erase everything!
    this.props.globalActions.reset();
  }

  render() {
    const {
      actions,
      main,
      sortedValues
    } = this.props;

    return (
      <div className="full-height">
        <section className="workspace">
          <AffixTitle affix="1.">
            Select a column to work with
          </AffixTitle>
          <div className="flex-layout">
            {
              main.headers.map((header, i) => {
                return (
                  <ColumnCard
                    key={i}
                    index={i}
                    header={header}
                    select={this.selectHeader}
                    values={sortedValues[header]} />
                );
              })
            }
          </div>
        </section>
        <Level className="action-bar">
          <LevelLeft>
            <Button
              outlined
              onClick={this.backToUpload}>
              Upload another file
            </Button>
          </LevelLeft>
          <LevelRight>
            <LevelItem>
              <DownloadButton onClick={actions.download} />
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
