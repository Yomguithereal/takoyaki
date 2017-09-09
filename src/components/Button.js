/**
 * Takoyaki Button Component
 * ==========================
 *
 * Component representing Bulma buttons.
 */
import React from 'react';
import cls from 'classnames';

export default function Button(props) {
  const {
    children,
    level = 'primary',
    disabled = false,
    outlined = false,
    loading = false,
    onClick = Function.prototype,
    className
  } = props;

  const classes = cls(
    'button',
    `is-${level}`,
    outlined && 'is-outlined',
    loading && 'is-loading',
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
}
