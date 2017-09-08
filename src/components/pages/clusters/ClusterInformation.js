/**
 * Takoyaki Cluster Component
 * ===========================
 *
 * Component displaying the information of a single cluster.
 */
import React from 'react';

/**
 * Component displaying a single value.
 */
function ClusterValue(props) {
  return (
    <code>
      {props.value}
    </code>
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
      Cluster n°{number} containing <span className="highlight">{data.length}</span> distinct values:
      <ul className="cluster-value-list">
        {data.map((group, i) => {
          return (
            <li key={i}>
              <ClusterValue value={group.value} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
