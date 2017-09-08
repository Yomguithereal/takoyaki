/**
 * Takoyaki Data Table Component
 * ==============================
 *
 * Component displaying a data table.
 */
import React from 'react';
import cls from 'classnames';
import {replaceSingleCharacter} from './helpers';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  MultiGrid
} from 'react-virtualized';

/**
 * Constants.
 */
const SPACE_REGEX = /\s/g;

/**
 * Measurer cache.
 */
const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 40,
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

    const title = value;

    // Highlighting empty values
    if (value === '') {
      value = <span className="highlight">.</span>;
    }

    else if (columnIndex !== 0 && rowIndex !== 0 && !isNaN(value)) {
      value = <div className="highlight-number">{value}</div>;
    }

    else if (columnIndex !== 0) {
      let key = 0;

      value = replaceSingleCharacter(value, SPACE_REGEX, key => {
        return <span key={key} className="space-indicator">&#8729;</span>;
      });
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}>
        <div
          title={title}
          className={cls(
            'table-cell',
            rowIndex === 0 && 'header',
            columnIndex === 0 && 'line-number'
          )}
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
              fixedColumnCount={1}
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
