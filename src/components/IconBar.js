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
import TableEditIcon from 'react-material-icon-svg/dist/TableEditIcon';
import BorderColorIcon from 'react-material-icon-svg/dist/BorderColorIcon';

export default function IconBar(props) {
  const {
    step
  } = props;

  return (
    <ul className="icon-bar">
      <li className={cls('icon-item', step === 'upload' && 'active')}>
        <UploadIcon width={30} height={30} />
      </li>
      <li className={cls('icon-item', step === 'main' && 'active')}>
        <ViewHeadlineIcon width={30} height={30} />
      </li>
      <li className={cls('icon-item', step === 'clusters' && 'active')}>
        <TableEditIcon width={30} height={30} />
      </li>
      <li className={cls('icon-item', step === 'recipe' && 'active')}>
        <BorderColorIcon width={30} height={34} />
      </li>
    </ul>
  );
}
