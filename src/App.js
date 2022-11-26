import React, { useState, useEffect } from "react";
import KakaoMapContainer from "./components/KakaoMap/KakaoMapContainer";

import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/RightSideBar/RightSideBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw; // 전체 가로비율
  height: 100vh; // 전체 세로비율
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: calc(100%-80px);
`;

function App() {
  // Global Data

  return (
    <Wrapper>
      <Header />
      <Main>
        <LeftSideBar />
        <KakaoMap>
          <KakaoMapContainer />
        </KakaoMap>
        <RightSideBar />
      </Main>
    </Wrapper>
  );
}

export default App;

const KakaoMap = styled.div`
  width: 68%;
  height: 40%;
`