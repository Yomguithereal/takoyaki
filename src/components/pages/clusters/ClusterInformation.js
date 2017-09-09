/**
 * Takoyaki Cluster Component
 * ===========================
 *
 * Component displaying the information of a single cluster.
 */
import React from 'react';
import sumBy from 'lodash/fp/sumBy';
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
        <code className="cluster-value">
          {props.value}
        </code>
      </td>
    </tr>
  );
}

/**
 * Main component.
 */
export default function ClusterInformation(props) {
  const {
    number,
    data
  } = props;

  const nbRows = sumBy(group => group.rows.length, data);

  return (
    <div className="cluster-information">
      Cluster n°<strong>{number + 1}</strong> containing <span className="highlight">{NUMBER_FORMAT(data.length)}</span> distinct values
      over <span className="highlight">{NUMBER_FORMAT(nbRows)}</span> rows:
      <table className="cluster-value-list">
        <thead>
          <tr>
            <th>Rows</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          {data.map((group, i) => {
            return (
              <ClusterValue key={i} value={group.value} rows={group.rows} />
            );
          })}
        </tbody>
      </table>
      <div className="cluster-merger">
        <label className="checkbox">
          <input type="checkbox" /> Harmonize this cluster as:
        </label>
        <input
          type="text"
          className="cluster-harmonized-value"
          value={data[0].value} />
      </div>
    </div>
  );
}
