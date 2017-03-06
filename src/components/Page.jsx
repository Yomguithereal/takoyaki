/**
 * Takoyaki Page Component
 * ========================
 *
 * Component representing a full page of the application.
 */
import React from 'react';
import {pure} from 'recompose';
import {Col} from './bootstrap/grid.jsx';
import ProgressBar from './bootstrap/ProgressBar.jsx';

function Page(props) {
  const {
    id,
    title,
    description,
    actionBar,
    loading = false,
    children
  } = props;

  return (
    <Col size={9} id="page">
      <div className="top-menu">
        <div className="menu-content">
          <h2>{title}</h2>
          <div className="description">
            {description}
          </div>
        </div>
        <ProgressBar loading={loading} />
      </div>
      <div id={id} className="content">
        {children}
      </div>
      <div className="bottom-menu">
        {actionBar}
      </div>
    </Col>
  );
}

export default pure(Page);
