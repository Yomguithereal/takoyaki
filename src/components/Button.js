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
    size = null,
    disabled = false,
    outlined = false,
    inverted = false,
    loading = false,
    onClick = Function.prototype,
    className,
    style = {}
  } = props;

  const classes = cls(
    'button',
    `is-${level}`,
    size && `is-${size}`,
    outlined && 'is-outlined',
    inverted && 'is-inverted',
    loading && 'is-loading',
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={style}>
      {children}
    </button>
  );
}
