import React from 'react';
import styled, { css } from 'styled-components';
import { mtFn, mbFn } from '@utils/styles';

const SectionContainer = styled.div`
  border-radius: 8px;
  display: flex;
  background: #3a393e;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgb(28 17 44 / 4%), 0px 5px 12px rgb(28 17 44 / 6%);
  width: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  scroll-margin: 20px;
  ${mtFn};
  ${mbFn};
`;

const SectionContent = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  background: white;
  background: #3a393e;
  border-radius: 0px 0px 8px 8px;
  ${(props) =>
    props.asCustom &&
    css`
      padding: 0;
    `}
`;

const SectionHeader = styled.div`
  padding: 16px 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;

  border-radius: 8px 8px 0 0px;
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #f3f3f4;
  }
`;

const SectionTypeGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SectionTypeItem = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  width: 20px;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  border-radius: 50%;
  border: 2px solid #3a393e;

  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  ${(props) =>
    props.variant === 'fair' &&
    css`
      box-shadow: 0px 0px 0px 2px rgba(114, 206, 188, 0.5);
    `}
  ${(props) =>
    props.variant === 'high' &&
    css`
      box-shadow: 0px 0px 0px 2px rgba(226, 78, 51, 0.5);
    `}
  ${(props) =>
    props.variant === 'medium' &&
    css`
      box-shadow: 0px 0px 0px 2px hsl(28deg 77% 57% / 52%);
      /* box-shadow: 0px 0px 0px 2px rgba(239, 204, 76, 0.5); */
    `}

    
  padding: 0;
  margin: 0;
`;

const SectionFooter = styled.div`
  width: 100%;
  border-top: 1px solid #373639;
  height: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #313133;
  border-radius: 0 0 6px 6px;
`;

const SectionType = ({ variant = 'default', ...props }) => {
  const options = [
    {
      variant: 'high',
      fill: '#E24E33',
      stroke: '#D44126',
    },
    {
      variant: 'medium',
      fill: '#E68A3C',
      stroke: '#E68A3C',
    },
    {
      variant: 'low',
      fill: '#EFCC4C',
      stroke: '#EFCC4C',
    },
    {
      variant: 'fair',
      fill: '#72CEBC',
      stroke: '#72CEBC',
    },
    {
      variant: 'light',
      fill: '#5AAFED',
      stroke: '#5AAFED',
    },
    {
      variant: 'welcome',
      fill: '#6E6BEF',
      stroke: '#6E6BEF',
    },
  ];

  const items = options.filter(
    (item) => item.variant.toUpperCase() === variant.toUpperCase()
  );
  const renderType = items.map((item) => (
    <SectionTypeItem
      key={item.variant}
      variant={item.variant}
      bgColor={item.fill}
    />
  ));

  return <SectionTypeGroup style={props.style}>{renderType}</SectionTypeGroup>;
};

const style = {
  marginLeft: 'auto',
};

const Section = ({
  children,
  title = '',
  id,
  asCustom = '',
  priority = '',
  ...props
}) => (
  <SectionContainer priority={priority} className={title} id={id} {...props}>
    {title && (
      <SectionHeader priority={priority}>
        <h2>{title}</h2>
        <SectionType style={style} variant={priority} />
      </SectionHeader>
    )}
    {children && (
      <SectionContent asCustom={asCustom} className="SectionContent">
        {children}
      </SectionContent>
    )}
    <SectionFooter></SectionFooter>
  </SectionContainer>
);

export { Section, SectionContent };
