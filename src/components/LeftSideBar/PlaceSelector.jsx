import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: row;
  height: 6%;
  background-color: #c5bcbc;
  border-right: 1px solid #e0e0e0;
`;

function PlaceSelector() {
  return (
    <Wrapper>
        <img src="assets/img/PlaceSelect/All.png" alt="전체"></img>
        <img src="assets/img/PlaceSelect/All.png" alt="관광지"></img>
        <img src="assets/img/PlaceSelect/All.png" alt="숙소"></img>
        <img src="assets/img/PlaceSelect/All.png" alt="식당"></img>
        <img src="assets/img/PlaceSelect/All.png" alt="쇼핑"></img>
        <img src="assets/img/PlaceSelect/All.png" alt="기타"></img>
    </Wrapper>
  );
}


export default PlaceSelector;

