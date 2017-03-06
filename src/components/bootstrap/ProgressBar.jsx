/**
 * Takoyaki ProgressBar Components
 * ================================
 *
 * Component wrapping a bootstrap progress bar.
 */
import React from 'react';

export default function ProgressBar(props) {
  const {
    loading
  } = props;

  if (!loading)
    return null;

  return (
    <div className="progress">
      <div
        style={{width: '100%'}}
        className="progress-bar progress-bar-striped progress-bar-animated" />
    </div>
  );
}
