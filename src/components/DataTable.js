/**
 * Takoyaki Data Table Component
 * ==============================
 *
 * Component displaying a data table.
 */
import React from 'react';
import {AutoSizer, Table, Column} from 'react-virtualized';

/**
 * Main component.
 */
export default function DataTable(props) {
  const {
    data,
    headers
  } = props;

  return (
    <AutoSizer disableHeight>
      {({width}) => {

        // Finding a proper column width
        const columnWidth = Math.min(200, width / headers.length) | 0;

        return (
          <Table
            width={width}
            height={300}
            headerHeight={20}
            rowHeight={20}
            rowCount={data.length}
            rowGetter={({index}) => data[index]}>
            {headers.map((header, i) => {
              return (
                <Column
                  key={i}
                  width={columnWidth}
                  label={header}
                  dataKey={header} />
              );
            })}
          </Table>
        );
      }}
    </AutoSizer>
  );
}
