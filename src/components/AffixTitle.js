/**
 * Takoyaki Affix Title Component
 * ===============================
 *
 * Fancy title with an affix.
 */
import React from 'react';

export default function AffixTitle({affix, children}) {
  return (
    <h2 className="title is-4">
      <span className="affix">{affix}</span>
      {children}
    </h2>
  );
}
