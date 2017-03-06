/**
 * Takoyaki Table Module
 * ======================
 *
 * Component rendering a custom Table using the `react-table` library.
 */
import React from 'react';
import ReactTable from 'react-table';
import {pure} from 'recompose';

function Table(props) {
  const {
    headers,
    data,
    defaultPageSize = 10
  } = props;

  return (
    <ReactTable
      sortable={false}
      defaultPageSize={defaultPageSize}
      columns={headers}
      data={data} />
  );
}

export default pure(Table);
