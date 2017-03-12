/**
 * Takoyaki Table Module
 * ======================
 *
 * Component rendering a custom Table using the `react-table` library.
 */
import React from 'react';
import Measure from 'react-measure';
import {Table as FixedDataTable, Column, Cell} from 'fixed-data-table';

/**
 * Component rendering a header cell.
 */
function HeaderCell(props) {
  const {
    name
  } = props;

  return (
    <Cell>
      <strong>
        {name}
      </strong>
    </Cell>
  );
}

/**
 * Component rendering a simple cell.
 */
function SimpleCell(props) {
  const {
    data,
    field,
    rowIndex
  } = props;

  const value = data[rowIndex][field];

  return (
    <Cell>
      {value}
    </Cell>
  );
}

/**
 * Component rendering the full table.
 */
function Table(props) {
  const {
    headers = [],
    data
  } = props;

  return (
    <Measure>
      {dimensions => {
        const columnWidth = Math.max(200, dimensions.width / headers.length);

        return (
          <div className="data-table">
            <FixedDataTable
              rowsCount={data.length}
              rowHeight={30}
              headerHeight={30}
              width={dimensions.width}
              height={dimensions.height}>
              {headers.map(header => {
                return (
                  <Column
                    key={header}
                    width={columnWidth}
                    header={<HeaderCell name={header} />}
                    cell={<SimpleCell field={header} data={data} />} />
                );
              })}
            </FixedDataTable>
          </div>
        );
      }}
    </Measure>
  );
}

export default Table;
