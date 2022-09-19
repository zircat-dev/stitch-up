import styled from 'styled-components';

const Container = styled.div`
  form {
    position: absolute;
    left: -999px;
    top: -999px;
  }
  button {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export { Container };
