import React from 'react';
import { includes, toUpper, length, keys } from 'ramda';
import { Primary, Secondary, Tertiary } from './IconContainer.styled';

/**
 * position
 * rotate
 *
 */

const IconContainer = ({ variant = '', children, ...props }) => {
  const upperCaseVariant = toUpper(variant);

  const config = {
    PRIMARY: <Primary {...props}>{children}</Primary>,
    SECONDARY: <Secondary {...props}>{children}</Secondary>,
    TERTIARY: <Tertiary {...props}>{children}</Tertiary>,
  };

  if (
    !variant ||
    !length(upperCaseVariant) ||
    !includes(upperCaseVariant)(keys(config))
  ) {
    console.log('Variant not found ::', variant);
    return <Primary {...props}>{children}</Primary>;
  }

  return config[upperCaseVariant];
};

export { IconContainer };
