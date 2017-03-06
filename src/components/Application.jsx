/**
 * Takoyaki Application Component
 * ===============================
 *
 * Main component of the application.
 */
import React from 'react';
import {Grid, Row, Col} from './bootstrap/grid.jsx';

export default function Application() {
  return (
    <Grid id="wrapper">
      <Row className="full-height">
        <Col size={3} />
        <Col size={9} />
      </Row>
    </Grid>
  );
}
