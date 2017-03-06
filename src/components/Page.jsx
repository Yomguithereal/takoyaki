/**
 * Takoyaki Page Component
 * ========================
 *
 * Component representing a full page of the application.
 */
import React from 'react';
import {Col} from './bootstrap/grid.jsx';

export default function Page({children}) {
  return (
    <Col size={9} id="page">
      <div className="top-menu" />
      <div className="content">
        {children}
      </div>
      <div className="bottom-menu" />
    </Col>
  );
}
