import React from "react";
import styled from "styled-components";

import PlaceSelector from "./PlaceSelector.jsx";
import PlaceTable from "./PlaceTable.jsx";
// import dummy from "\public\dummy\place_list"

function LeftSideBar() {


  return (
    <Wrapper>
      <PlaceSelector />
      <Wrapper2>
      <PlaceTable img="assets/img/TD/948.png" name="성산일출봉" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트1" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트2" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>
      <PlaceTable img="assets/img/TD/948.png" name="테스트3" tag="#태그태그 #태그태그"/>

      </Wrapper2>
    </Wrapper>
  );
}

export default LeftSideBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #edfcfd;
  align-content: center;
  width: 16%;
  height: 100%;
`;

const Wrapper2 = styled.div`
  display:flex;
  flex-direction: column;
  overflow: scroll;
  height: 785px;
`