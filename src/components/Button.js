/**
 * Takoyaki Button Component
 * ==========================
 *
 * Component representing Bulma buttons.
 */
import React from 'react';

export default function Button(props) {
  const {
    children,
    level = 'primary'
  } = props;

  return (
    <button className={`button is-${level}`}>
      {children}
    </button>
  );
}
