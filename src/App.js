import React from 'react';
import styled from "styled-components";
import Router from './util/Router';
import Header from './components/Header';



function App() {
  return (
    <Wrap>
      <Header/>
      <Router/>
    </Wrap>
  );
}
export default App;

const Wrap = styled.div`
max-width: 1920px;
min-width: 800px;
width: 100%;
`;

