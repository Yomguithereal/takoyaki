/**
 * Takoyaki Steps Component
 * =========================
 *
 * Component displaying the steps of the application on the left.
 */
import React from 'react';
import cls from 'classnames';

export default function Steps({activeStep}) {

  return (
    <ul id="steps">
      <li className={cls(activeStep === 'upload' && 'active', 'upload')}>1. Upload</li>
      <li className={cls(activeStep === 'clean' && 'active', 'clean')}>2. Clean</li>
      <li className={cls(activeStep === 'cluster' && 'active', 'cluster')}>3. Cluster</li>
      <li className={cls(activeStep === 'export' && 'active', 'export')}>4. Export</li>
    </ul>
  );
}

Steps.contextTypes = {
  router: React.PropTypes.object
};
