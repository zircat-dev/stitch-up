/* eslint-disable react/prop-types */
import React from 'react';

const IconPath = (props) => {
  const { fill = 'none', stroke = '#211551' } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <path
        d="M13 9L10 12L7 9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPath;
