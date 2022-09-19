import React from 'react';
import styled from 'styled-components';

import { Overlay } from '@common/Overlay';
import { Spinner } from '@common/Spinner';

const LoaderContainer = styled.div.attrs({ className: 'LoaderContainer' })`
  background: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 110px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const LoaderContent = styled.div`
  color: #a9aeb9;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  margin-top: 10px;
  text-align: center;
  color: #1d2a43;
  font-weight: 500;
  font-size: 16px;
`;

const Loader = ({ message = '', position = 'fixed', hasOverlay = false }) => (
  <>
    <LoaderContainer>
      <Spinner circle={`#A9AEB9`} path={`#FF5A45`} />
      {message && <LoaderContent>{message}</LoaderContent>}
    </LoaderContainer>

    {hasOverlay && <Overlay position={position} />}
  </>
);

export { Loader };
