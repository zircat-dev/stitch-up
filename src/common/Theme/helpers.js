import { css } from 'styled-components';

const weightFn = ({ weight = 500 }) =>
  weight &&
  css`
    font-weight: ${weight};
  `;

const widthFn = ({ width }) =>
  width &&
  css`
    width: ${width};
  `;

const lineHeightFn = ({ lineHeight }) =>
  lineHeight &&
  css`
    line-height: ${lineHeight};
  `;

const horizontalPushFn = ({ horizontalPush }) =>
  horizontalPush &&
  css`
    margin-left: ${horizontalPush};
  `;

const horizontalPullFn = ({ horizontalPull }) =>
  horizontalPull &&
  css`
    margin-right: ${horizontalPull};
  `;

const verticalPullFn = ({ verticalPull }) =>
  verticalPull &&
  css`
    margin-bottom: ${verticalPull};
  `;

const verticalPushFn = ({ verticalPush }) =>
  verticalPush &&
  css`
    margin-top: ${verticalPush};
  `;

export {
  weightFn,
  widthFn,
  lineHeightFn,
  horizontalPushFn,
  horizontalPullFn,
  verticalPullFn,
  verticalPushFn,
};
