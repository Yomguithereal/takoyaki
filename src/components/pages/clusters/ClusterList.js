/**
 * Takoyaki Cluster List Component
 * ================================
 *
 * Component displaying the found clusters.
 */
import React, {Component} from 'react';
import {AutoSizer, List} from 'react-virtualized';
import {format} from 'd3-format';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');

/**
 * Main component.
 */
export default class ClusterList extends Component {
  render() {
    const {
      header,
      clusters,
      selectedRecipe
    } = this.props;

    if (!clusters)
      return null;

    return (
      <div className="cluster-list">
        <div>
          Found <span className="highlight">{NUMBER_FORMAT(clusters.size)}</span> clusters in the
          <span className="highlight"> {header}</span> column using the
          <span className="highlight"> {selectedRecipe.label}</span> recipe.
        </div>
        <AutoSizer>
          {({width, height}) => {
            return (
              <List
                ref={list => (this.list = list)}
                width={width}
                height={height - 24}
                rowCount={clusters.size}
                rowHeight={({index}) => {
                  const cluster = clusters.get(index);

                  // Estimated height in pixels
                  return (cluster.groups.length * 24);
                }}
                rowRenderer={({index, style}) => {
                  const cluster = clusters.get(index);

                  return (
                    <div key={`${cluster.key}§${index}`} style={style}>
                      <ul>
                        {cluster.groups.map((group, i) => <li key={i}>{group.value}</li>)}
                      </ul>
                    </div>
                  );
                }} />
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}
