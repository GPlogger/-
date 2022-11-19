import React from "react";
import styled from "styled-components";
import { TbDots } from "react-icons/tb";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: row;
  height: 6%;
  background-color: rgb(226,238,238);
  /* border-right: 1px solid #e0e0e0; */
`;

const Image = styled.img`
  padding: 8px;
  width: calc(100%);
  /* width: calc(100%/6); */
  &::after{width: 10px; height: 10px; background-color: red;}
  :hover {border:rgb(42,134,129) 2px solid;}
`;

const LastImage = styled.img`
  padding: 8px;
  width: calc(100%);
  /* width: calc(100%/6); */
  :hover {border:rgb(42,134,129) 2px solid;}
`;
const ImageBox = styled.div`
  width: calc(100%/6);
  cursor: pointer;
  
`

function PlaceSelector() {
  return (
    <Wrapper>
        <ImageBox>
        <Image src="assets/img/PlaceSelect/All.png" alt="전체"></Image>
        </ImageBox>
        <ImageBox>
        <Image src="assets/img/PlaceSelect/TD.png" alt="관광지"></Image>
        </ImageBox>
        <ImageBox>
        <Image src="assets/img/PlaceSelect/Hotel.png" alt="숙소"></Image>
        </ImageBox>
        <ImageBox>
        <Image src="assets/img/PlaceSelect/Restaurant.png" alt="식당"></Image>
        </ImageBox>
        <ImageBox>
        <Image src="assets/img/PlaceSelect/Shopping.png" alt="쇼핑"></Image>
        </ImageBox>
        <ImageBox>
        <LastImage src="assets/img/PlaceSelect/Dots.png" alt="기타"></LastImage>
        </ImageBox>
    </Wrapper>
  );
}


export default PlaceSelector;

