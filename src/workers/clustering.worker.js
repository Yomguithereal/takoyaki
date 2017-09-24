/**
 * Takoyaki Clusterer Worker
 * ==========================
 *
 * WebWorker designed to run the cluster computations without freezing the UI.
 */
import MultiMap from 'mnemonist/multi-map';
import shuffleInPlace from 'pandemonium/shuffle-in-place';
import {buildPreprocessorChain} from '../definitions/preprocessors';
import clusterers from '../definitions/clusterers';
import metrics from '../definitions/metrics';

/**
 * Helpers.
 */
function clusterComparator(a, b) {
  if (a.rows.length > b.rows.length)
    return -1;
  else if (a.rows.length < b.rows.length)
    return 1;
  return 0;
}

/**
 * Process outline.
 */
function performClustering(values, recipe) {
  const clustererDefinition = clusterers[recipe.clusterer],
        metricDefinition = metrics[recipe.metric];

  //-- 1) Preprocessing & mapping unique values
  const metric = metricDefinition && metricDefinition.build();

  let preprocessor;

  if (recipe.preprocessor)
    preprocessor = buildPreprocessorChain(recipe.preprocessor);

  const map = new MultiMap();

  for (let i = 0, l = values.length; i < l; i++)
    map.set(values[i], i);

  //-- 2) Retrieving & shuffling values
  const items = [...map.keys()];

  if (clustererDefinition.shuffle)
    shuffleInPlace(items);

  //-- 3) Building clusterer & computing the clusters
  const clusterer = clustererDefinition.build({
    metric: metricDefinition,
    preprocessor
  });

  const clusters = clusterer(items);

  //-- 4) Expanding clusters to rows
  const expandedClusters = new Array(clusters.length);

  for (let i = 0, l = clusters.length; i < l; i++) {
    const cluster = clusters[i],
          groups = [];

    let totalNbRows = 0;

    for (let j = 0, m = cluster.length; j < m; j++) {
      const rows = map.get(cluster[j]);

      groups.push({
        value: cluster[j],
        rows
      });

      totalNbRows += rows.length;
    }

    expandedClusters[i] = {
      key: i,
      groups: groups.sort(clusterComparator),
      nbRows: totalNbRows,
      harmonizedValue: groups[0].value
    };
  }

  return expandedClusters;
}

/**
 * Message listener.
 */
function onMessage(data) {
  const values = data.values,
        recipe = data.recipe;

  const clusters = performClustering(values, recipe);

  return self.postMessage({clusters});
}

/**
 * Listening.
 */
self.addEventListener('message', e => onMessage(e.data));
