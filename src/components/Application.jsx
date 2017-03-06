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
      <Row className="full-height no-gutters">
        <Col size={3} id="main-menu" />
        <Col size={9} id="page">
          <div className="top-menu" />
          <div className="content" />
          <div className="bottom-menu" />
        </Col>
      </Row>
    </Grid>
  );
}
