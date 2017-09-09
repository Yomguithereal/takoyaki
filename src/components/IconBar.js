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
import DownloadIcon from 'react-material-icon-svg/dist/DownloadIcon';

      // <li className="icon-item download-button">
      //   <DownloadIcon width={26} height={26} />
      // </li>

export default function IconBar(props) {
  const {
    step
  } = props;

  return (
    <ul className="icon-bar">
      <li className={cls('icon-item', step === 'upload' && 'active')}>
        <UploadIcon width={26} height={26} />
      </li>
      <li className={cls('icon-item', step === 'main' && 'active')}>
        <ViewHeadlineIcon width={26} height={26} />
      </li>
      <li className={cls('icon-item', step === 'clusters' && 'active')}>
        <UngroupIcon width={26} height={26} />
      </li>
      <li className={cls('icon-item', step === 'focus' && 'active')}>
        <EyeIcon width={26} height={26} />
      </li>
      <li className={cls('icon-item', step === 'recipe' && 'active')}>
        <TableEditIcon width={26} height={26} />
      </li>
    </ul>
  );
}
