/**
 * Takoyaki Page Component
 * ========================
 *
 * Component representing a full page of the application.
 */
import React from 'react';
import {Col} from './bootstrap/grid.jsx';

export default function Page(props) {
  const {
    id,
    title,
    description,
    children
  } = props;

  return (
    <Col size={9} id="page">
      <div className="top-menu">
        <h2>{title}</h2>
        <div className="description">
          {description}
        </div>
      </div>
      <div id={id} className="content">
        {children}
      </div>
      <div className="bottom-menu" />
    </Col>
  );
}
