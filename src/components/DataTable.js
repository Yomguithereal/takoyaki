/**
 * Takoyaki Data Table Component
 * ==============================
 *
 * Component displaying a data table.
 */
import React from 'react';
import cls from 'classnames';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  MultiGrid
} from 'react-virtualized';

/**
 * Measurer cache.
 */
const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 75,
  fixedHeight: true
});

/**
 * Main component.
 */
export default function DataTable(props) {
  const {
    data,
    headers
  } = props;

  const cellRenderer = ({columnIndex, key, rowIndex, style, parent}) => {
    let value;

    if (rowIndex === 0) {
      if (columnIndex === 0)
        value = '#';
      else
        value = headers[columnIndex - 1];
    }
    else {
      if (columnIndex === 0)
        value = rowIndex;
      else
        value = data[rowIndex - 1][headers[columnIndex - 1]];
    }

    // Highlighting empty values
    if (value === '')
      value = <span className="highlight">.</span>;

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}>
        <div
          className={cls('table-cell', rowIndex === 0 && 'header')}
          style={style}>
          {value}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <AutoSizer disableHeight>
      {({width}) => {
        return (
          <div>
            <MultiGrid
              fixedRowCount={1}
              fixedCellCount={1}
              cellRenderer={cellRenderer}
              deferredMeasurementCache={cache}
              columnCount={headers.length + 1}
              columnWidth={cache.columnWidth}
              rowCount={data.length + 1}
              rowHeight={30}
              height={300}
              width={width} />
          </div>
        );
      }}
    </AutoSizer>
  );
}
