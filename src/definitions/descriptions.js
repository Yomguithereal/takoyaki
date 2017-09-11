/**
 * Takoyaki Descriptions
 * ======================
 *
 * Custom descriptions for the clusterers and metrics that cannot simply fit
 * in a string.
 */
import React from 'react';

export const CLUSTERER_DESCRIPTIONS = {
  keyCollision: (
    <div>
      <p className="complexity"><strong>Complexity: <code>O(n)</code></strong></p>
      <p>
        The "key collision" clustering algorithm is probably the simplest one and
        works as follows:
      </p>
      <ol>
        <li>
          Preprocess all your values using normalizer functions or
          phonetic encodings etc.
        </li>
        <li>
          Insert all the values in a MultiMap (i.e. a structure whose keys
          map to several different values) and extract its containers.
        </li>
        <li>
          That's it. You have clusters.
        </li>
      </ol>
      <p>
        What's more, this algorithm does not need to compute costly distance
        functions. Which is also why it is so fast.
      </p>
    </div>
  ),
  naive: (
    <div>
      <p className="complexity"><strong>Complexity: <code>O(n²)</code></strong></p>
      <p>
        Let's assume we have a function able to express the similarity between
        two strings (such a function could return whether the&nbsp;
        <a href="https://en.wikipedia.org/wiki/Levenshtein_distance">Levenshtein</a> distance
        between two strings is less than 3, for instance).
      </p>
      <p>
        Then, one way to find clusters is to compute all pairwise similarities
        and put strings in the same cluster if they are deemed similar.
      </p>
      <p>
        This algorithm is called "naive" because it does not try to optimize
        anything and therefore runs in quadratic time, which is a catastrophe
        when most similarity metrics also run in quadratic time.
      </p>
      <p>
        The exact number of similarity functions this algorithm has to
        compute is actually <code>(n * (n - 1)) / 2</code> since similarity
        metrics are usually symmetric and since we don't need to compute the
        similarity of a string with itself.
      </p>
    </div>
  ),
  vpTree: (
    <div>
      <p className="complexity"><strong>Complexity: <code>approx. O(n log(n))</code></strong></p>
      <p>
        A <a href="https://en.wikipedia.org/wiki/Vantage-point_tree">Vantage Point Tree</a> is
        a handy data structure used to perform efficient nearest neighbor queries
        in an arbitrary metric space.
      </p>
      <p>
        It works by choosing a value in the dataset and making it the
        "vantage point" of the node. It then splits the remaining points into two
        children nodes: one storing the nearest points and the other the farthest
        ones. It then continues recursively until all values have been stored.
      </p>
      <p>
        It can therefore be used to optimize the "naive" approach if we follow
        this process:
        <ol>
          <li>Choose a distance metric</li>
          <li>Index all the values in a vantage point tree</li>
          <li>
            Iterate over all the values and query the tree for all the neighbors
            reachable from a given distance.
          </li>
          <li>
            Insert them into a new cluster.
          </li>
          <li>
            Continue iterating while avoiding querying values that already are
            in a cluster.
          </li>
        </ol>
      </p>
      <p>
        This yield clusters in approximately <code>O(n log(n))</code> time. Which
        is obviously better than the "naive" quadratic time.
      </p>
      <p>
        However, one has to know that this performance may quickly decrease in
        some specific use cases.
      </p>
      <p>
        Indeed, the tree splits its values using the median of distances and
        because of median ambiguity, the tree might become unbalanced.
      </p>
      <p>
        This is frequently the case when all values are very similar or too few.
      </p>
      <p>
        Finally note that, to be correct, a Vantage Point Tree needs to operate
        with a <a href="https://en.wikipedia.org/wiki/Metric_(mathematics)">true
        metric</a>.
      </p>
    </div>
  )
};
