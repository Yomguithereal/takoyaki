/**
 * Takoyaki Cluster Component
 * ===========================
 *
 * Component displaying the information of a single cluster.
 */
import React, {Component} from 'react';
import {format} from 'd3-format';

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
        <code className="cluster-value" onClick={() => props.update(props.cluster, props.value)}>
          {props.value}
        </code>
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
      number,
      cluster,
      explore,
      updateHarmonizedValue
    } = this.props;

    return (
      <div className="cluster-information">
        Cluster n°<strong>{number + 1}</strong> containing <span className="highlight">{NUMBER_FORMAT(cluster.groups.length)}</span> distinct values
        over <span className="highlight">{NUMBER_FORMAT(cluster.nbRows)}</span> rows (<a className="explore-link" onClick={() => explore(number)}>explore</a>):
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
                  cluster={cluster.key}
                  value={group.value}
                  rows={group.rows}
                  update={updateHarmonizedValue} />
              );
            })}
          </tbody>
        </table>
        <div className="cluster-merger">
          <label className="checkbox">
            <input type="checkbox" value={cluster.harmonized} /> Harmonize this cluster as:
          </label>
          <input
            type="text"
            className="cluster-harmonized-value"
            spellCheck={false}
            value={cluster.harmonizedValue}
            onChange={e => updateHarmonizedValue(cluster.key, e.target.value)} />
        </div>
      </div>
    );
  }
}
