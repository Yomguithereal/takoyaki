/* eslint no-alert: 0 */
/**
 * Takoyaki IconBar Component
 * ===========================
 *
 * Icon bar allowing for fast navigation.
 */
import React from 'react';
import cls from 'classnames';

import UploadIcon from 'react-material-icon-svg/dist/UploadIcon';
import ViewHeadlineIcon from 'react-material-icon-svg/dist/ViewHeadlineIcon';
import UngroupIcon from 'react-material-icon-svg/dist/UngroupIcon';
import EyeIcon from 'react-material-icon-svg/dist/EyeIcon';
import TableEditIcon from 'react-material-icon-svg/dist/TableEditIcon';

export default function IconBar(props) {
  const {
    step
  } = props;

  return (
    <ul className="icon-bar">
      <li
        data-tip="Upload a file"
        data-for="icons"
        onClick={() => alert('The icon bar is still WIP')}
        className={cls('icon-item', step === 'upload' && 'active')}>
        <UploadIcon width={26} height={26} />
      </li>
      <li
        data-tip="Choose a recipe"
        data-for="icons"
        onClick={() => alert('The icon bar is still WIP')}
        className={cls('icon-item', step === 'main' && 'active')}>
        <ViewHeadlineIcon width={26} height={26} />
      </li>
      <li
        data-tip="Check found clusters"
        data-for="icons"
        onClick={() => alert('The icon bar is still WIP')}
        className={cls('icon-item', step === 'clusters' && 'active')}>
        <UngroupIcon width={26} height={26} />
      </li>
      <li
        data-tip="Explore a single cluster"
        data-for="icons"
        onClick={() => alert('The icon bar is still WIP')}
        className={cls('icon-item', step === 'exploration' && 'active')}>
        <EyeIcon width={26} height={26} />
      </li>
      <li
        data-tip="Create or edit a recipe"
        data-for="icons"
        onClick={() => alert('The icon bar is still WIP')}
        className={cls('icon-item', step === 'recipe' && 'active')}>
        <TableEditIcon width={26} height={26} />
      </li>
    </ul>
  );
}
