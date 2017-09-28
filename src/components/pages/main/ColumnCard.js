/**
 * Takoyaki Column Card Component
 * ===============================
 *
 * Card representing a column's information and that can be selected by the
 * user to start clustering.
 */
import React, {Component} from 'react';
import {format} from 'd3-format';
import {AutoSizer, Table, Column} from 'react-virtualized';
import {replaceSingleCharacter} from '../../helpers';
import Button from '../../Button';

/**
 * Formats.
 */
const NUMBER_FORMAT = format(',');
const SPACE_REGEX = /\s/g;

/**
 * Main component.
 */
export default class ColumnCard extends Component {
  render() {
    const {
      index,
      header,
      select,
      values
    } = this.props;

    if (!values)
      return (
        <div className="column-card">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {index + 1}. {header}
              </p>
            </header>
            <div className="card-content" style={{height: `${328}px`}}>
              <em>This column does not contain string values.</em>
            </div>
            <footer className="card-footer">
              <Button
                disabled
                className="card-footer-item card-footer-item-button"
                onClick={() => select(header)}>
                Cluster & Edit
              </Button>
            </footer>
          </div>
        </div>
      );

    return (
      <div className="column-card">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title" style={{display: 'block'}}>
              {index + 1}. {header} (<span className="highlight">{NUMBER_FORMAT(values.length)}</span> values)
            </p>
          </header>
          <div className="card-content">
            <AutoSizer disableHeight>
              {({width}) => {
                return (
                  <Table
                    width={width}
                    height={280}
                    headerHeight={20}
                    disableHeader
                    rowHeight={20}
                    rowCount={values.length}
                    rowGetter={({index: i}) => values[i]}>
                    <Column
                      label="Value"
                      dataKey="0"
                      cellRenderer={({cellData}) => {
                        const title = cellData;

                        // Missing value
                        if (!cellData) {
                          cellData = <span className="highlight">.</span>;
                        }

                        // Number
                        else if (!isNaN(cellData)) {
                          cellData = <span className="highlight-number">{cellData}</span>;
                        }

                        // Spaces
                        else {
                          cellData = replaceSingleCharacter(cellData, SPACE_REGEX, k => {
                            return <span key={k} className="space-indicator">&nbsp;</span>;
                          });
                        }

                        return (
                          <span title={title} className="column-card-value">
                            {cellData}
                          </span>
                        );
                      }}
                      width={width - 70} />
                    <Column
                      label="Count"
                      dataKey="1"
                      cellRenderer={({cellData}) => {
                        return (
                          <div className="column-card-value-count">
                            {NUMBER_FORMAT(cellData)}
                          </div>
                        );
                      }}
                      width={70} />
                  </Table>
                );
              }}
            </AutoSizer>
          </div>
          <footer className="card-footer">
            <Button
              className="card-footer-item card-footer-item-button"
              onClick={() => select(header)}>
              Cluster & Edit
            </Button>
          </footer>
        </div>
      </div>
    );
  }
}
