/**
 * Takoyaki Level Components
 * ==========================
 *
 * Helper components dealing with Bulma levels.
 */
import React from 'react';

export function Level({children, className}) {
  return <div className={`level ${className}`}>{children}</div>;
}

export function LevelLeft({children}) {
  return <div className="level-left">{children}</div>;
}

export function LevelRight({children}) {
  return <div className="level-right">{children}</div>;
}

export function LevelItem({children, ...other}) {
  return <div className="level-item" {...other}>{children}</div>;
}
