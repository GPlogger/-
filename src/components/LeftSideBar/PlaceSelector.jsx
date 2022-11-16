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
        <img src="assets/img/PlaceSelect/All.png" alt="전체" style={{height: "51px"}}></img>
        <img src="assets/img/PlaceSelect/All.png" alt="관광지"style={{height: "51px"}}></img>
        <img src="assets/img/PlaceSelect/All.png" alt="숙소"style={{height: "51px"}}></img>
        <img src="assets/img/PlaceSelect/All.png" alt="식당"style={{height: "51px"}}></img>
        <img src="assets/img/PlaceSelect/All.png" alt="쇼핑"style={{height: "51px"}}></img>
        <img src="assets/img/PlaceSelect/All.png" alt="기타"style={{height: "51px"}}></img>
    </Wrapper>
  );
}


export default PlaceSelector;

