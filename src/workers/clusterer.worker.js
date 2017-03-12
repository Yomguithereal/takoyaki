/**
 * Takoyaki Clusterer Worker
 * ==========================
 *
 * WebWorker designed to run the cluster computations without freezing the UI.
 */
import MultiMap from 'mnemonist/multi-map';
import shuffleInPlace from 'pandemonium/shuffle-in-place';
import preprocessors from '../definitions/preprocessors';
import clusterers from '../definitions/clusterers';
import distances from '../definitions/distances';

// TODO: apply dedupe optimization for some clusterers

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
 * Process outline.
 */
function performClustering(values, recipe) {
  const preprocessorDefinition = preprocessors[recipe.preprocessor],
        clustererDefinition = clusterers[recipe.clusterer],
        distanceDefinition = distances[recipe.distance];

  //-- 1) Preprocessing & mapping unique values
  const preprocessor = preprocessorDefinition && preprocessorDefinition.build(),
        distance = distanceDefinition && distanceDefinition.distance;

  const map = new MultiMap();

  for (let i = 0, l = values.length; i < l; i++)
    map.set(values[i], i);

  //-- 2) Retrieving & shuffling values
  const items = [...map.keys()];

  if (clustererDefinition.shuffle)
    shuffleInPlace(items);

  //-- 3) Building clusterer & computing the clusters
  const clusterer = clustererDefinition.build({
    distance,
    preprocessor,
    radius: 2
  });

  const clusters = clusterer(items);

  //-- 4) Expanding clusters to rows
  const expandedClusters = new Array(clusters.length);

  for (let i = 0, l = clusters.length; i < l; i++) {
    const cluster = clusters[i],
          rows = [];

    for (let j = 0, m = cluster.length; j < m; j++)
      rows.push({
        value: cluster[j],
        rows: map.get(cluster[j])
      });

    expandedClusters[i] = rows;
  }

  return expandedClusters;
}

/**
 * Listening.
 */
self.addEventListener('message', e => onMessage(e.data));
