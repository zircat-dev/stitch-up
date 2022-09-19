import styled, { css } from 'styled-components';
import { mtFn, mbFn } from '@utils/styles';

const basicStyles = css`
  display: flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
`;

const basicText = css`
  line-height: 14px;
  font-size: 14px;
`;

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const basicFunctions = css`
  ${(props) =>
    props.isDisabled &&
    css`
      color: #a9aeb9 !important;
      background: #f7f7f9 !important;
      border: 1px solid #f7f7f9 !important;
      cursor: not-allowed;
      &:hover {
        cursor: not-allowed;
        color: #a9aeb9 !important;
        background: #f7f7f9 !important;
        border: 1px solid #f7f7f9 !important;
        box-shadow: 0px 2px 8px rgba(29, 42, 67, 0.2) !important;
      }
      &:focus {
        cursor: not-allowed;
        box-shadow: 0px 2px 8px rgba(29, 42, 67, 0.2) !important;
      }
    `}
`;

const Button = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  padding: 17px 16px;
  background: #ff5a45;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    background: #ff5a45;
    box-shadow: 0px 2px 8px rgba(209, 48, 28, 0.2),
      0px 5px 12px rgba(209, 48, 28, 0.06);
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

export { Button };
