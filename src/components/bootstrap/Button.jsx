/**
 * Takoyaki Button Components
 * ===========================
 *
 * Component wrapping a bootstrap button.
 */
import React from 'react';
import cls from 'classnames';

export default function Button(props) {
  const {
    kind,
    className,
    disabled,
    children
  } = props;

  const classes = cls(
    'btn',
    `btn-${kind}`,
    className
  );

  return (
    <button
      role="button"
      className={classes}
      disabled={disabled}>
      {children}
    </button>
  );
}
