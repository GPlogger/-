import React, { useState, useEffect } from "react";
import KakaoMapContainer from "./components/KakaoMap/KakaoMapContainer";
// import logo from './logo.svg';
import "./App.css";

function App() {
  // 리액트 데이터 저장 공간 [state데이터, 데이터 변경 함수], 안에 배열, 객체 등 여러 형태 넣을 수 있음
  // state는 값이 변경되면 새로고침 없이도 HTML이 자동으로 재랜더링이 됨
  let [placeTitle, setPlaceTitle] = useState("제주공항");

  function addScadule() {
    console.log(1);
  }
  // 데이터 바인딩이 매우 쉬움 ( {변수명} 을 사용해 랜더링 시킬 수 있음)
  // {} 안에 변수명 또는 함수() 를 사용
  // 스타일 넣을 때 오브젝트 형식( style={ color : blue}) 으로 넣어야 함

    return (
      <div className="App">
        <div className="black-nav">
        <div><img src="assets/img/logo3.png" alt="logo" className="logo-img"/></div>
      </div>
      <div className="List">
        <h3>{placeTitle} <span onClick={addScadule}>✔</span></h3>
        <p>제주공항입니다.</p>
        <hr/>
      </div>

        <KakaoMapContainer></KakaoMapContainer>
      </div>
    );
  };

  
export default App;
