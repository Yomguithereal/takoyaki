/**
 * Takoyaki Table Module
 * ======================
 *
 * Component rendering a custom Table using the `react-table` library.
 */
import React from 'react';
import ReactTable from 'react-table';

export default function Table(props) {
  const {
    headers,
    data
  } = props;

  return (
    <ReactTable
      defaultPageSize={10}
      columns={headers}
      data={data} />
  );
}
