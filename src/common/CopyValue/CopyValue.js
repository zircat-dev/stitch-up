import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@common/Icon';
import { mbFn, mtFn, media } from '@utils/styles';
import { prop, keys } from 'ramda';
import styled, { css } from 'styled-components';
import { useClickOutside as ClickOutside } from '@hooks/useClickOutside';
import { Modal } from '@common/Modal';

const DataButton = styled.button`
  padding: 6px;
  margin: 0;
  margin-left: 8px;
  background: white;
  border: 1px solid #a9aeb9;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`;

const Container = styled.div`
  ${mtFn};
  ${mbFn};
  form {
    position: absolute;
    left: -999px;
    top: -999px;
  }
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props) =>
    props.type === 'ERROR' &&
    css`
      border: 2px solid red;
      background: #ff8484;
      color: white;
      span {
        color: black;
      }
    `}
  input {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
    line-height: 21px;
    max-width: 1200px;
  }
`;

const CopyButton = styled.div`
  background: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: stretch;
  /* border-radius: 8px; */
  flex-grow: 0;
  /* margin: 12px 0px; */
  border-top: 1px solid #58575b;
  border-bottom: 1px solid #373639;
  /* padding: 16px; */
  /* border: 1px solid #efefef; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: #3d3c40;
  &:hover {
    background: #4e4d51;
  }
  padding: 16px;
  /* box-shadow: 0px 2px 2px rgba(28, 17, 44, 0.09); */
  &.is-active {
    /* border: 1px solid #19b244; */
    background: #4e4d51;
  }
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    box-shadow: 2px 3px 4px rgba(28, 17, 44, 0.14);
  }
`;

const CopyLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  /* color: #121b2d; */
  color: #95929e;
  display: flex;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  text-align: left;
  max-width: 130px;
  line-height: 31px;
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: 300px;
    `}
`;

const CopyItem = styled.span.attrs({ className: 'CopyItem' })`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  max-width: 200px;
  color: #fbfafb;
  ${media.sm`
    max-width: 500px;
`}
  ${media.md`
   max-width: 404px;
  `}
`;

const IconContainer = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
`;

const DotItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 8px;
  height: 100%;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #95929e;
    transform: translate(-50%, -50%);
  }
`;

const DotGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 32px;
  flex-direction: row;
`;

const RevealButton = styled.button`
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #424145;
  margin-left: 16px;
  color: #a29ea9;
  cursor: pointer;
  border-bottom: 1px solid #373639;
  &:hover {
    background: #424145;
  }
`;

const CopyText = ({
  isHidden = false,
  isLocalHidden,
  value = '',
  data = {},
  onDetailCallback = () => {},
  onRevealCallback = () => {},
  maxWidth,
}) => {
  const hasData = data && keys(data).length > 0;
  const handleDetail = (e) => {
    e.stopPropagation();
    onDetailCallback();
  };
  if (isHidden && isLocalHidden) {
    const valueLength = value && value.length > 0 ? value.length : 3;
    const mapValues = [...Array(valueLength).keys()].map((item) => (
      <DotItem key={item} />
    ));
    return (
      <>
        <DotGroup>{mapValues}</DotGroup>
        <RevealButton onClick={onRevealCallback}>Reveal</RevealButton>
        {hasData && (
          <DataButton onClick={handleDetail}>
            <Icon name="DETAILS" stroke="black" size={20} />
          </DataButton>
        )}
      </>
    );
  }
  return (
    <>
      <CopyItem maxWidth={maxWidth}>{value}</CopyItem>{' '}
      {isHidden && !isLocalHidden && (
        <RevealButton onClick={onRevealCallback}>Hide</RevealButton>
      )}
    </>
  );
};

const CopyValue = ({
  value,
  id,
  config = {},
  isHidden,
  label,
  className,
  callback,
  onCallback,
  data,
  ...props
}) => {
  const copyRef = useRef(null);
  const [showChecked, setShowChecked] = useState(false);
  const [localHidden, setLocalHidden] = useState(isHidden);
  const [modal, setModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [itemWidth, setWidth] = useState(0);
  const textAreaRef = useRef(null);

  const layoutStyle = prop('layout')(config);
  const buttonStyle = prop('button')(config);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(true);
    setShowChecked(true);
    onCallback(id);
  };

  const handleClose = () => {
    setCopySuccess(false);
    setShowChecked(false);
    onCallback(id);
  };

  useEffect(() => {
    if (copyRef.current) {
      setWidth(copyRef.current.clientWidth);
    }
  }, []);

  return (
    <ClickOutside callback={handleClose}>
      <Container style={layoutStyle} {...props}>
        <CopyContainer>
          {document.queryCommandSupported('copy') && (
            <CopyButton
              ref={copyRef}
              className={copySuccess ? `${className} is-active` : className}
              style={buttonStyle}
              onClick={copyToClipboard}
            >
              {label && <CopyLabel maxWidth>{label}</CopyLabel>}
              {value && (
                <CopyText
                  maxWidth={itemWidth > 0 && itemWidth}
                  isHidden={isHidden}
                  isLocalHidden={localHidden}
                  value={value}
                  onRevealCallback={() => setLocalHidden(!localHidden)}
                  onDetailCallback={() => setModal(true)}
                />
              )}
              <IconContainer>
                {showChecked ? (
                  <Icon name="CHECKMARK" size={20} />
                ) : (
                  <Icon name="COPY" size={20} />
                )}
              </IconContainer>
            </CopyButton>
          )}
        </CopyContainer>
        <form>
          <textarea readOnly ref={textAreaRef} value={value} />
        </form>
        {modal && data && <Modal>{data.title}</Modal>}
      </Container>
    </ClickOutside>
  );
};

CopyValue.defaultProps = {
  className: 'copy',
  isHidden: false,
  id: '',
  label: '',
  callback: () => {},
  onCallback: () => {},
  value: '',
};

export { CopyValue };
