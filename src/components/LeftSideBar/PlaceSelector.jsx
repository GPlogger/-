import React from "react";
import styled from "styled-components";
import { TbDots } from "react-icons/tb";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: row;
  height: 6%;
  background-color: #c5bcbc;
  border-right: 1px solid #e0e0e0;
`;

const Image = styled.img`
  padding: 8px;
  width: calc(100%/6);
  &::after{width: 10px; height: 10px; background-color: red;}
`;

const LastImage = styled.img`
  padding: 8px;
  width: calc(100%/6);
  
`;

function PlaceSelector() {
  return (
    <Wrapper>
      
        <Image src="assets/img/PlaceSelect/All.png" alt="전체"></Image>
        <Image src="assets/img/PlaceSelect/TD.png" alt="관광지"></Image>
        <Image src="assets/img/PlaceSelect/Hotel.png" alt="숙소"></Image>
        <Image src="assets/img/PlaceSelect/Restaurant.png" alt="식당"></Image>
        <Image src="assets/img/PlaceSelect/Shopping.png" alt="쇼핑"></Image>
        <LastImage src="assets/img/PlaceSelect/Dots.png" alt="기타"></LastImage>
    </Wrapper>
  );
}


export default PlaceSelector;

