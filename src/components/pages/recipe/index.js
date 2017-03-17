/**
 * Takoyaki Recipe Page
 * =====================
 *
 * Page supervising the recipe creation & edition.
 */
import React, {Component} from 'react';
import {compose} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../../Page.jsx';
import Table from '../../Table.jsx';
import Button from '../../bootstrap/Button.jsx';
import PreprocessorBuilder from './PreprocessorBuilder.jsx';
import ClusteringMethodSelector from './ClusteringMethodSelector.jsx';
import MetricSelector from './MetricSelector.jsx';
import {changeStep} from '../../../modules/recipes';

/**
 * Map.
 */
const MAP = {
  preprocessing: PreprocessorBuilder,
  method: ClusteringMethodSelector,
  metric: MetricSelector
};

/**
 * Description.
 */
const TITLE = 'Editing a clustering recipe';

const DESCRIPTION = (
  <p>
    <em>
      Here, we can edit a clustering recipe to fine tune it to our use case.
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
      onClick={submit}
      loadingText="Clustering...">
      Done
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
        step: state.recipes.step
      };
    },
    dispatch => {
      return {
        actions: bindActionCreators({
          changeStep
        }, dispatch)
      };
    }
  )
);

/**
 * Step component.
 */
function Step({active, step, onClick, children}) {
  const kind = active ? 'primary' : 'secondary';

  return (
    <Button kind={kind} onClick={() => onClick(step)}>
      {children}
    </Button>
  );
}

/**
 * Main component.
 */
class RecipePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      actions,
      step
    } = this.props;

    const Inner = MAP[step];

    return (
      <Page
        id="page-recipe"
        title={TITLE}
        description={DESCRIPTION}
        actionBar={renderActionBar(this.props, actions.computeClusters)}>
        <div className="recipe-steps">
          <Step
            active={step === 'preprocessing'}
            step="preprocessing"
            onClick={actions.changeStep}>
            1. Preprocessing
          </Step>
          <Step
            active={step === 'method'}
            step="method"
            onClick={actions.changeStep}>
            2. Method
          </Step>
          <Step
            active={step === 'metric'}
            step="metric"
            onClick={actions.changeStep}>
            3. Metric
          </Step>
        </div>
        <Inner />
      </Page>
    );
  }
}

/**
 * Exporting.
 */
export default enhance(RecipePage);
