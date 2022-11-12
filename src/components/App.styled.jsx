import styled from 'styled-components';

export const AppContainer = styled.main`
  background-color: #103645;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
`;

export const AppSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 80%;
  padding: 50px;
  border: 3px solid black;
  border-radius: 20px;
  background-color: #8f5810;
`;
