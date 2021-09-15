import React from 'react';
import ChevronLink from '@tds/core-chevron-link';
import Link from '../shared/LinkWrapper';

const BottomLink = ({ path, text }) => {
  return (
    <div className="bottom-link">
      <Link TDSLink={ChevronLink} to={path}>{text}</Link>
    </div>
  )
}

export default BottomLink;