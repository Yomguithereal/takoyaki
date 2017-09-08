/**
 * Takoyaki Cluster Component
 * ===========================
 *
 * Component displaying the information of a single cluster.
 */
import React from 'react';
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
    <div>
      <code>
        {props.value}
      </code>
      &nbsp;{NUMBER_FORMAT(props.rows.length)}
    </div>
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

  return (
    <div className="cluster-information">
      Cluster n°{number} containing <span className="highlight">{NUMBER_FORMAT(data.length)}</span> distinct values:
      <ul className="cluster-value-list">
        {data.map((group, i) => {
          return (
            <li key={i}>
              <ClusterValue value={group.value} rows={group.rows} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
