import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePrevious } from '@hooks/usePrevious';
import styled, { css } from 'styled-components';
import { mtFn, mbFn } from '@utils/styles';
/* eslint-disable */

const Wrapper = styled.div`
  width: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 6px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  ${mtFn};
  ${mbFn};
  pre {
    border-radius: 6px;
  }
`;

const monokiTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;

    &.string {
      color: #ff8b39;
    }
    &.number {
      color: darkorange;
    }
    &.boolean {
      color: #f97e72;
    }
    &.null {
      color: #f97e72;
    }
    &.key {
      color: #2ee2fa;
    }
  }
`;

const greyTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;
    &.string {
      color: white;
    }
    &.number {
      color: white;
    }
    &.boolean {
      color: white;
    }
    &.null {
      color: white;
    }
    &.key {
      color: grey;
    }
  }
`;

const themePicker = (theme = '') =>
  ({
    GREY: greyTheme,
    MONOKI: monokiTheme,
  }[theme.toUpperCase() || 'DEFAULT']);

const Pre = styled.pre`
   {
    outline: 1px solid transparent;
    padding: 8px;
    margin: 0px;
    color: white;
    margin-top: 16px;
    background: #2e2c34;
  }
  ${(props) =>
    props.theme &&
    css`
      ${themePicker(props.theme)}
    `}
`;

const syntaxHighlight = (json) => {
  const updateJson = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return updateJson.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
};

const StateView = ({ state = {}, theme = 'MONOKI', ...props }) => {
  const [html, setHtml] = useState(null);
  const prevState = usePrevious(state);

  useEffect(() => {
    if (prevState !== state) {
      setHtml(syntaxHighlight(JSON.stringify(state, undefined, 4)));
    }
  }, [html, state]);

  const createMarkup = () => {
    return {
      __html: html,
    };
  };

  const renderMarkup = () => {
    if (!html) return null;
    return <Pre theme={theme} dangerouslySetInnerHTML={createMarkup()} />;
  };

  return (
    <Wrapper className="state-view" {...props}>
      {renderMarkup()}
    </Wrapper>
  );
};

StateView.defaultProps = {
  state: {},
  theme: 'MONOKI',
};

StateView.propTypes = {
  state: PropTypes.object,
  theme: PropTypes.string,
};

export { StateView };
