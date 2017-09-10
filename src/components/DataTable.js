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
  MultiGrid
} from 'react-virtualized';

/**
 * Constants.
 */
const SPACE_REGEX = /\s/g;

const MONOSPACE_GLYPH_WIDTH = 9;

/**
 * Main component.
 */
export default function DataTable(props) {
  const {
    data,
    headers,
    rows = null,
    selectedHeader = null,
    onClickHeader = null,
    height = 400
  } = props;

  // Computing column sizes
  const columnSizes = {};

  let indexColumnSize = ('' + data.length).length || 1;

  if (rows)
    indexColumnSize = ('' + rows[rows.length - 1]).length || 1;

  headers.forEach(header => {
    let max = Math.max(header.length, 1);

    for (let i = 0, l = data.length; i < l; i++) {
      const string = data[i][header];

      if (string) {

        // We must not accept more than 200 characters to remain performant
        const value = Math.min(string.length, 200);

        if (value > max)
          max = value;
      }
    }

    columnSizes[header] = max;
  });

  let totalColumnWidth = indexColumnSize * MONOSPACE_GLYPH_WIDTH + 15;

  for (const k in columnSizes)
    totalColumnWidth += columnSizes[k] * MONOSPACE_GLYPH_WIDTH + 15;

  const columnWidthSolver = ({index}) => {

    // NOTE: for monospace 14px, the glyph width seems to be ~9px
    if (index === 0)
      return indexColumnSize * MONOSPACE_GLYPH_WIDTH + 15;

    return columnSizes[headers[index - 1]] * MONOSPACE_GLYPH_WIDTH + 15;
  };

  // Custom cell renderer
  const cellRenderer = ({columnIndex, key, rowIndex, style}) => {
    let value;

    const isHeader = rowIndex === 0;
    const isNbLine = columnIndex === 0;

    if (isHeader) {
      if (isNbLine)
        value = '#';
      else
        value = headers[columnIndex - 1];
    }
    else {
      if (isNbLine)
        value = rows ? (rows[rowIndex - 1] + 1) : rowIndex;
      else
        value = data[rowIndex - 1][headers[columnIndex - 1]];
    }

    // Highlighting empty values
    if (value === '') {
      value = <span className="highlight">.</span>;
    }

    else if (!value) {
      return null;
    }

    else if (!isNbLine && !isHeader && !isNaN(value)) {

      // TODO: numbers with trailing/leading spaces should not go there.
      value = <div className="highlight-number">{value}</div>;
    }

    else if (!isNbLine && !isHeader) {
      if (value.length > 200)
        value = value.slice(0, 199) + '…';

      value = replaceSingleCharacter(value, SPACE_REGEX, k => {
        return <span key={k} className="space-indicator">&nbsp;</span>;
      });
    }

    if (isHeader)
      return (
        <div
          key={key}
          className={cls(
            'table-cell',
            'header',
            isNbLine && 'line-number',
            headers[columnIndex - 1] === selectedHeader && 'selected',
            onClickHeader && 'pointer'
          )}
          onClick={onClickHeader ? () => onClickHeader(headers[columnIndex - 1]) : Function.prototype}
          style={style}>
          {value}
        </div>
      );

    return (
      <div
        key={key}
        className={cls(
          'table-cell',
          columnIndex === 0 && 'line-number'
        )}
        style={style}>
        {value}
      </div>
    );
  };

  // Rendering the component
  return (
    <AutoSizer disableHeight>
      {({width}) => {
        return (
          <MultiGrid
            fixedRowCount={1}
            fixedColumnCount={1}
            cellRenderer={cellRenderer}
            columnCount={headers.length + 1}
            columnWidth={columnWidthSolver}
            rowCount={data.length + 1}
            rowHeight={30}
            height={height}
            width={Math.min(totalColumnWidth, width)} />
        );
      }}
    </AutoSizer>
  );
}
