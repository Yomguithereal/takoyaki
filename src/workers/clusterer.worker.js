/**
 * Takoyaki Clusterer Worker
 * ==========================
 *
 * WebWorker designed to run the cluster computations without freezing the UI.
 */
import shuffleInPlace from 'pandemonium/shuffle-in-place';
import preprocessors from '../definitions/preprocessors';
import clusterers from '../definitions/clusterers';

// TODO: differentiate clusterer needing mapping beforehand
// TODO: drop transitive object when possible

/**
 * Message listener.
 */
function onMessage(data) {
  const values = data.values,
        recipe = data.recipe;

  const clusters = performClustering(values, recipe);
}

/**
 * Process outline.
 */
function performClustering(values, recipe) {

  //-- 1) Preprocessing & mapping unique values
  const preprocessor = preprocessors[recipe.preprocessor].build();

  const items = new Array(values.length);

  for (let i = 0, l = values.length; i < l; i++)
    items[i] = {value: preprocessor(values[i])};

  //-- 2) Retrieving & shuffling values
  shuffleInPlace(items);

  //-- 3) Building clusterer & computing the clusters
  const clusterer = clusterers[recipe.clusterer].build();

  const clusters = clusterer(items);

  console.log('clusters', clusters);

  return [];
}

/**
 * Listening.
 */
self.addEventListener('message', e => onMessage(e.data));
