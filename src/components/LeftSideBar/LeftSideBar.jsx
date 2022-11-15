import React from "react";
import styled from "styled-components";

import PlaceSelector from "./PlaceSelector.jsx";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
  align-content: center;
  width: 16%;
`;

const PlaceTable = styled.div`
  display: flex;
  flex-direction: column;
  height: 94%;
  background-color: #cbd8d7;
`;

const PlaceList = styled.div`
  display: flex;
  flex-direction: row;
  height: 12%;
  width: 90%;
  background-color: #e8f0ee;
  margin: 2% auto;
`;

const PlaceImg = styled.img`
  width: 35%;
  height: 100%;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
  width: 100%;
  align-content: space-between;
  background-color: #f8dada;
`;

const PlaceButtons = styled.div`
  width: 100%;
  height: 20%;
  text-align: right;

  background-color: #eeebce;

`
function LeftSideBar() {
  return (
    <Wrapper>
      <PlaceSelector />
      <PlaceTable>
        <PlaceList>
          <PlaceImg src="assets/img/TD/948.png" alt="성산일출봉" />
          <PlaceInfo>
            <h3>성산일출봉</h3>
            <h5>#태그태그 #태그태그</h5>
            <h5>#태그태그 #태그태그</h5>
          <PlaceButtons>
          ✔️ ➕
          </PlaceButtons>
          </PlaceInfo>
        </PlaceList>

      </PlaceTable>
    </Wrapper>
  );
}

export default LeftSideBar;