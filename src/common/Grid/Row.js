import styled from 'styled-components';
import { colGutterSize } from './gridUtils';
import { mtFn, mbFn } from '@utils/styles';
import { Col } from './Col';

const Row = styled.div.attrs({ className: 'Row' })`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.wrap ? 'column' : 'row')};
  margin-right: -${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  margin-left: -${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  box-sizing: border-box;

  ${Col} {
    padding-left: ${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
    padding-right: ${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  }

  ${mtFn};
  ${mbFn};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export { Row };
