/**
 * Takoyaki Download Button Component
 * ===================================
 *
 * Button to download the file back.
 */
import React from 'react';
import Button from './Button';
import DownloadIcon from 'react-material-icon-svg/dist/DownloadIcon';

export default function DownloadButton(props) {
  return (
    <Button className="download-button" {...props}>
      <DownloadIcon width={26} height={26} />
    </Button>
  );
}
