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

/**
 * Helpers.
 */
function canNavigate(state, where) {
  if (state.step === 'upload' && where !== 'upload')
    return false;

  if (
    (where === 'clusters' || where === 'exploration') &&
    (!state.clusters)
  )
    return false;

  return true;
}

/**
 * Main component.
 */
export default function IconBar(props) {
  const {
    actions,
    main
  } = props;

  const {
    step
  } = main;

  return (
    <ul className="icon-bar">
      <li
        data-tip="Upload a file"
        data-for="icons"
        onClick={() => canNavigate(main, 'upload') && actions.changeStep('upload')}
        className={cls(
          'icon-item',
          step === 'upload' && 'active',
          !canNavigate(main, 'upload') && 'muted'
        )}>
        <UploadIcon width={26} height={26} />
      </li>
      <li
        data-tip="Choose a recipe"
        data-for="icons"
        onClick={() => canNavigate(main, 'main') && actions.changeStep('main')}
        className={cls(
          'icon-item',
          step === 'main' && 'active',
          !canNavigate(main, 'main') && 'muted'
        )}>
        <ViewHeadlineIcon width={26} height={26} />
      </li>
      <li
        data-tip="Check found clusters"
        data-for="icons"
        onClick={() => canNavigate(main, 'clusters') && actions.changeStep('clusters')}
        className={cls(
          'icon-item',
          step === 'clusters' && 'active',
          !canNavigate(main, 'clusters') && 'muted'
        )}>
        <UngroupIcon width={26} height={26} />
      </li>
      <li
        data-tip="Explore a single cluster"
        data-for="icons"
        onClick={() => canNavigate(main, 'exploration') && actions.changeStep('exploration')}
        className={cls(
          'icon-item',
          step === 'exploration' && 'active',
          !canNavigate(main, 'exploration') && 'muted'
        )}>
        <EyeIcon width={26} height={26} />
      </li>
      <li
        data-tip="Create or edit a recipe"
        data-for="icons"
        className={cls(
          'icon-item',
          step === 'recipe' && 'active',
          !canNavigate(main, 'recipe') && 'muted'
        )}>
        <TableEditIcon width={26} height={26} />
      </li>
    </ul>
  );
}
