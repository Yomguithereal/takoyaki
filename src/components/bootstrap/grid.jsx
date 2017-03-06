/**
 * Takoyaki Grid Components
 * =========================
 *
 * Handy components dealing with bootstrap grid system.
 */
import React from 'react';
import cls from 'classnames';

export function Grid({id, children, className}) {
  const classes = cls('container-fluid', className);

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}

export function Row({children, className}) {
  const classes = cls('row', className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function Col({children, size, className}) {
  const classes = cls('col', `col-${size}`, className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
