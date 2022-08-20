import React from 'react';
import styled from "styled-components";
import Router from './Router';
import Header from './components/public/Header';
import {GlobalStyle} from "./style/GlobalStyle"



function App() {
  return (
      <Wrap>
        <GlobalStyle/>
        <Header />
        <Router />
      </Wrap>

  );
}
export default App;

const Wrap = styled.div`
max-width: 1920px;
min-width: 400px;
width: 100%;
`;

