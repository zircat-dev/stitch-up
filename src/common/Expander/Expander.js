import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@common/Icon';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop } from 'ramda';

import {
  ExpanderContainer,
  ExpanderHeader,
  ExpanderControls,
  ExpanderButton,
  ExpanderTitle,
  ExpanderContent,
} from './Expander.styled';

import { Checkmark } from './Checkmark';

const Expander = ({
  isActive,
  isComplete,
  title,
  children,
  button = null,
  config = {},
}) => {
  const layoutStyle = prop('layout')(config) || {};
  const titleStyle = prop('title')(config) || {};
  const contentStyle = prop('content')(config) || {};
  const [localActive, setActiveState] = useState(false);
  const [heightState, setHeightState] = useState(0);
  const content = useRef(null);

  useEffect(() => {
    if (isActive) {
      setActiveState(true);
      if (content.current) {
        setHeightState(content.current.scrollHeight + 72);
      }
    }
    // eslint-disable-next-line
  }, [isActive]);

  useEffect(() => {
    if (isComplete) {
      setActiveState(isComplete);
    }
    // eslint-disable-next-line
  }, [isComplete]);

  const onLocalPress = () => {
    setActiveState(!localActive);
    setHeightState(localActive ? 0 : content.current.scrollHeight + 72);
  };

  return (
    <ExpanderContainer style={{ ...layoutStyle }}>
      <ExpanderHeader>
        <Checkmark isActive={isComplete} />
        {button}
        {title && <ExpanderTitle style={titleStyle}>{title}</ExpanderTitle>}
        <ExpanderControls>
          <ExpanderButton
            onClick={onLocalPress}
            isActive={localActive}
            className="COLLAPSE_MENU"
          >
            <Icon name="COLLAPSE_MENU" rotate={90} size={20} />
          </ExpanderButton>
        </ExpanderControls>
      </ExpanderHeader>
      <ExpanderContent
        ref={content}
        maxHeight={heightState}
        style={{ ...contentStyle }}
        className="accordion__content"
      >
        {children}
      </ExpanderContent>
    </ExpanderContainer>
  );
};

Expander.propTypes = {
  config: PropTypes.object,
  isActive: PropTypes.bool,
  title: PropTypes.string,
};

Expander.defaultProps = {
  config: {},
  title: 'Expander',
};

export { Expander };
