import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import { Icon } from '@common/Icon';
import { usePortal as Portal } from '@hooks/usePortal';
import {
  Text,
  ModalContainer,
  ModalContent,
  CloseButton,
  Overlay,
  Block,
} from './Modal.styled';

const Modal = ({
  children,
  title,
  callback = () => {},
  label = '',
  style = {},
}) => {
  const refClickOutside = useRef();

  useOnClickOutside(refClickOutside, () => {
    callback('CLOSED');
  });

  const onPress = () => {
    callback('OPENED');
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      callback('CLOSED');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line
  }, []);

  const renderWrapper = (
    <>
      <ModalContainer ref={refClickOutside} level={9}>
        <ModalContent>
          <Block direction="row" justifyContent="space-between">
            <Text
              size="20px"
              lineHeight="24px"
              fontWeight={500}
              style={{ textAlign: 'left' }}
            >
              {title}
            </Text>
            <CloseButton onClick={() => callback('CLOSED')}>
              <Icon name="CLOSE" size={20} />
            </CloseButton>
          </Block>
          {children}
        </ModalContent>
      </ModalContainer>
      <Overlay level={1} isActive />
    </>
  );

  return renderWrapper;
};

export { Modal };
