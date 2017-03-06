/**
 * Takoyaki Steps Component
 * =========================
 *
 * Component displaying the steps of the application on the left.
 */
import React from 'react';
import cls from 'classnames';

function activeClass(router, path) {
  return cls({active: router.isActive(path)});
}

export default function Steps(props, context) {
  const router = context.router;

  return (
    <ul id="steps">
      <li className={activeClass(router, 'upload')}>1. Upload</li>
      <li className={activeClass(router, 'clean')}>2. Clean</li>
      <li className={activeClass(router, 'cluster')}>3. Cluster</li>
    </ul>
  );
}

Steps.contextTypes = {
  router: React.PropTypes.object
};
