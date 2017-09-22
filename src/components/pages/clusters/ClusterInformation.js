/**
 * Takoyaki Cluster Component
 * ===========================
 *
 * Component displaying the information of a single cluster.
 */
import React, {Component} from 'react';
import {format} from 'd3-format';
import Button from '../../Button';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');

/**
 * Component displaying a single value.
 */
function ClusterValue(props) {
  return (
    <tr>
      <td className="cluster-value-rows">
        {NUMBER_FORMAT(props.rows.length)}
      </td>
      <td>
        <code className="cluster-value" onClick={() => props.update(props.clusterIndex, props.value)}>
          {props.value}
        </code>
        &nbsp;
        <a
          style={{fontSize: '0.7em'}}
          onClick={() => props.remove(props.clusterIndex, props.index)}>remove</a>
      </td>
    </tr>
  );
}

/**
 * Main component.
 */
export default class ClusterInformation extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.cluster !== this.props.cluster;
  }

  render() {
    const {
      index,
      cluster,
      explore,
      updateHarmonizedValue,
      harmonizeCluster,
      dropCluster,
      removeValueFromCluster
    } = this.props;

    return (
      <div className="cluster-information">
        Cluster n°<strong>{cluster.key + 1}</strong> containing <span className="highlight">{NUMBER_FORMAT(cluster.groups.length)}</span> distinct values
        over <span className="highlight">{NUMBER_FORMAT(cluster.nbRows)}</span> rows (<a className="explore-link" onClick={() => explore(index)}>explore</a>):
        <table className="cluster-value-list">
          <thead>
            <tr>
              <th>Rows</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {cluster.groups.map((group, i) => {
              return (
                <ClusterValue
                  key={i}
                  clusterIndex={index}
                  index={i}
                  cluster={cluster.key}
                  value={group.value}
                  rows={group.rows}
                  update={updateHarmonizedValue}
                  remove={removeValueFromCluster} />
              );
            })}
          </tbody>
        </table>
        <table className="cluster-value-list">
          <tbody>
            <tr className="cluster-merger">
              <td className="cluster-value-rows" />
              <td>
                <input
                  type="text"
                  className="cluster-harmonized-value"
                  spellCheck={false}
                  value={cluster.harmonizedValue}
                  onChange={e => updateHarmonizedValue(index, e.target.value)} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div>
          <Button
            size="small"
            onClick={() => harmonizeCluster(index)}>
            Harmonize
          </Button>
          &nbsp;
          <Button
            outlined
            size="small"
            onClick={() => dropCluster(index)}>
            Drop
          </Button>
        </div>
      </div>
    );
  }
}
