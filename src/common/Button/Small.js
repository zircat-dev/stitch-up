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

const Small = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  padding: 8px;
  background: #efefef;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid #d9dce5;
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    background: #d9dce5;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

export { Small };
