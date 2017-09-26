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
    // this.selectRecipe = this.selectRecipe.bind(this);
    // this.createRecipe = this.createRecipe.bind(this);
    // this.editRecipe = this.editRecipe.bind(this);
    // this.deleteRecipe = this.deleteRecipe.bind(this);
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

  // selectRecipe(option) {
  //   if (!option)
  //     return this.props.actions.selectRecipe(null);

  //   this.props.actions.selectRecipe(option.value);
  // }

  // createRecipe() {
  //   const {
  //     actions,
  //     recipesActions: recipes
  //   } = this.props;

  //   recipes.create();
  //   actions.changeStep('recipe');
  // }

  // editRecipe() {
  //   const {
  //     actions,
  //     recipesActions: recipes
  //   } = this.props;

  //   recipes.select(this.props.main.selectedRecipe);
  //   actions.changeStep('recipe');
  // }

  // deleteRecipe() {
  //   const {
  //     actions,
  //     recipesActions: recipes
  //   } = this.props;

  //   actions.selectRecipe(null);
  //   recipes.delete(this.props.main.selectedRecipe);
  // }

  backToUpload() {

    // TODO: modal warning that we will erase everything!
    this.props.globalActions.reset();
  }

  render() {
    const {
      actions,
      main
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
                    values={main.values[header]} />
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
