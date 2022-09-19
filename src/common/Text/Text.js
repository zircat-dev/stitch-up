/* eslint-disable no-underscore-dangle */
import React from 'react';
import { TextParagraph, TextSpan, TextLink } from './Text.styled';
import { toUpper, keys, includes } from 'ramda';

const Text = ({ as = 'P', children, ...props }) => {
  const config = {
    P: <TextParagraph {...props}>{children}</TextParagraph>,
    SPAN: <TextSpan {...props}>{children}</TextSpan>,
    LINK: <TextLink {...props}>{children}</TextLink>,
  };

  if (!includes(toUpper(as))(keys(config))) {
    return <TextParagraph {...props}>{children}</TextParagraph>;
  }

  return config[toUpper(as)];
};

export { Text };
