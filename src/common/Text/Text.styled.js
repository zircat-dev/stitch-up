import styled from 'styled-components';
import { mtFn, mbFn } from '@utils/styles';
import {
  verticalPullFn,
  verticalPushFn,
  horizontalPushFn,
  horizontalPullFn,
  colorFn,
  widthFn,
  preventSelectFn,
  fontSizeFn,
  linkFn,
  weightFn,
  centerFn,
  lineHeightFn,
} from '@utils/styles';

const TextLink = styled.a`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  line-height: 20px;
  user-select: none;
  ${preventSelectFn};
  ${lineHeightFn};
  ${fontSizeFn};
  ${weightFn};
  ${widthFn};
  ${colorFn};
  ${linkFn};
  ${centerFn};
  ${horizontalPullFn};
  ${horizontalPushFn};
  ${verticalPushFn};
  ${verticalPullFn};
  cursor: pointer;
`;

const TextParagraph = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  user-select: none;
  ${preventSelectFn};
  ${lineHeightFn};
  ${fontSizeFn};
  ${weightFn};
  ${widthFn};
  ${colorFn};
  ${linkFn};
  ${centerFn};
  ${horizontalPullFn};
  ${horizontalPushFn};
  ${verticalPushFn};
  ${verticalPullFn};
  ${mtFn};
  ${mbFn};
  span {
    font-size: 14px;
    margin-left: 8px;
    color: grey;
  }
`;

const TextSpan = styled.span`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  line-height: 20px;
  user-select: none;
  ${preventSelectFn};
  ${lineHeightFn};
  ${fontSizeFn};
  ${weightFn};
  ${widthFn};
  ${colorFn};
  ${linkFn};
  ${centerFn};
  ${horizontalPullFn};
  ${horizontalPushFn};
  ${verticalPushFn};
  ${verticalPullFn};
`;

export { TextLink, TextParagraph, TextSpan };
