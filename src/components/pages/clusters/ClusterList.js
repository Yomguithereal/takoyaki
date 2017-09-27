/**
 * Takoyaki Cluster List Component
 * ================================
 *
 * Component displaying the found clusters.
 */
import React, {Component} from 'react';
import {AutoSizer, List} from 'react-virtualized';
import {format} from 'd3-format';

import Button from '../../Button';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');

const LINEBREAK_REGEX = /\n/g;

const ARROW_UP = '↑',
      ARROW_DOWN = '↓';

function getArrow(sorting, by) {
  if (sorting.by !== by)
    return ' ';

  return sorting.order === 'asc' ? ARROW_UP : ARROW_DOWN;
}

/**
 * Sorting options.
 */
function ClusterListSortingOptions(props) {
  const {
    sorting,
    sort
  } = props;

  return (
    <div className="clusters-sorting-options">
      Sort clusters by:&nbsp;
      <a onClick={() => sort('number')}>number</a>{` ${getArrow(sorting, 'number')}`},&nbsp;
      <a onClick={() => sort('values')}>distinct values</a>{` ${getArrow(sorting, 'values')}`},&nbsp;
      <a onClick={() => sort('rows')}>affected rows</a>{` ${getArrow(sorting, 'rows')}`}
    </div>
  );
}

/**
 * Cluster.
 */
function Cluster(props) {
  const {
    number,
    data,
    width
  } = props;

  return (
    <table className="cluster" style={{width: '100%'}}>
      <tbody>
        <tr>
          <td>
            <table style={{width: '100%'}}>
              <tbody>
                {data.groups.map((group, i) => {
                  const sanitizedValue = group.value.replace(LINEBREAK_REGEX, '\\n');

                  const adjustedWidth = width - 105 - 60 - 10;

                  return (
                    <tr key={i}>
                      <td className="cluster-rowcount">
                        {NUMBER_FORMAT(group.rows.length)}
                      </td>
                      <td className="cluster-value" style={{width: `${adjustedWidth}px`}}>
                        <code style={{maxWidth: `${adjustedWidth}px`}}>{sanitizedValue}</code>
                      </td>
                      <td className="cluster-remove-value">
                        <div data-for="help" data-tip="Remove">
                          <a>-</a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="cluster-rowcount" />
                  <td>
                    {ARROW_DOWN}
                  </td>
                </tr>
                <tr>
                  <td className="cluster-rowcount" />
                  <td>
                    <input
                      className="cluster-harmonized-value"
                      spellCheck={false}
                      type="text"
                      value={data.harmonizedValue} />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="cluster-actions" style={{width: '105px'}}>
            <div style={{marginBottom: '5px'}}>
              <Button size="small" outlined>Harmonize</Button>
            </div>
            <div style={{marginBottom: '20px'}}>
              <Button size="small" inverted>Drop</Button>
            </div>
            <div>
              <Button size="small" inverted>Explore</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/**
 * Main component.
 */
export default class ClusterList extends Component {
  componentDidUpdate(prevProps) {
    const prev = prevProps.sorting,
          next = this.props.sorting;

    // Recomputing row heights when sorting the list
    if (
      this.list &&
      (
        prev.by !== next.by ||
        prev.order !== next.order
      )
    ) {
      this.list.recomputeRowHeights();
      this.list.scrollToPosition(0);
    }
  }
s
  render() {
    const {
      header,
      clusters,
      selectedRecipe,
      sort,
      sorting
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
        <ClusterListSortingOptions
          sort={sort}
          sorting={sorting} />
        <AutoSizer>
          {({width, height}) => {
            return (
              <List
                ref={list => (this.list = list)}
                width={width}
                height={height - 24 - 25}
                rowCount={clusters.size}
                rowHeight={({index}) => {
                  const cluster = clusters.get(index);

                  // Estimated height in pixels
                  return 40 + (24 * 2) + (cluster.groups.length * 45);
                }}
                rowRenderer={({index, style}) => {
                  const cluster = clusters.get(index);

                  return (
                    <div key={`${cluster.key}§${index}`} style={style}>
                      <Cluster number={index} data={cluster} width={width} />
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
