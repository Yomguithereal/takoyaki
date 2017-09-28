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
      ARROW_DOWN = '↓',
      RETURN_ARROW = '↳';

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
    actions,
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

                  const adjustedWidth = width - 105 - 60 - 20;

                  return (
                    <tr key={i}>
                      <td className="cluster-rowcount">
                        {NUMBER_FORMAT(group.rows.length)}
                      </td>
                      <td
                        title={group.value}
                        className="cluster-value"
                        style={{width: `${adjustedWidth}px`}}
                        onClick={() => actions.updateHarmonizedValue(number, group.value)}>
                        <code style={{maxWidth: `${adjustedWidth}px`}}>{sanitizedValue}</code>
                      </td>
                      <td className="cluster-remove-value">
                        <div onClick={() => actions.removeValueFromCluster(number, i)}>
                          <a>-</a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="cluster-rowcount return-arrow">
                    {RETURN_ARROW}
                  </td>
                  <td>
                    <input
                      className="cluster-harmonized-value"
                      spellCheck={false}
                      type="text"
                      value={data.harmonizedValue}
                      onChange={e => actions.updateHarmonizedValue(number, e.target.value)} />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="cluster-actions" style={{width: '105px'}}>
            <div style={{marginBottom: '5px'}}>
              <Button
                size="small"
                outlined
                onClick={() => actions.harmonizeCluster(number)}>
                Harmonize
              </Button>
            </div>
            <div style={{marginBottom: '20px'}}>
              <Button
                size="small"
                inverted
                onClick={() => actions.dropCluster(number)}>
                Drop
              </Button>
            </div>
            <div>
              <Button
                size="small"
                inverted
                onClick={() => actions.explore(number)}>
                Explore
              </Button>
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
      actions,
      header,
      clusters,
      selectedRecipe,
      sort,
      sorting
    } = this.props;

    if (!clusters)
      return null;

    if (!selectedRecipe)
      return (
        <div className="cluster-list">
          <div>
            Select a recipe to start finding clusters.
          </div>
        </div>
      );

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
                  return 40 + 24 + (cluster.groups.length * 45);
                }}
                rowRenderer={({index, style}) => {
                  const cluster = clusters.get(index);

                  return (
                    <div key={`${cluster.key}§${index}`} style={style}>
                      <Cluster
                        number={index}
                        actions={actions}
                        data={cluster}
                        width={width} />
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
