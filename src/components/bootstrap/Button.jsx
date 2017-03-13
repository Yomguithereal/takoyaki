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
    kind = 'primary',
    size = null,
    className,
    disabled,
    onClick,
    children,
    loading = false,
    loadingText = 'Loading...'
  } = props;

  const classes = cls(
    'btn',
    `btn-${kind}`,
    size && `btn-${size}`,
    className
  );

  return (
    <button
      role="button"
      onClick={onClick}
      className={classes}
      disabled={disabled || loading}>
      {loading ? loadingText : children}
    </button>
  );
}
