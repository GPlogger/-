import React from "react";
import styled from "styled-components";
import { IoInformationSharp, IoAddOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { positionState, levelState } from "../recoil/MapStates";

import panTo from "../KakaoMap/KakaoMapContainer";
let position = [0, 0];
let level = 3;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  /* padding: 10px; */
  margin: 9px 9px 0px;
`;

const PlaceList = styled.div`
  display: flex;
  flex-direction: row;
  height: 96px;
  width: 275px;
  background-color: white;
  align-content: center;
  box-shadow: 0 17px 20px -18px #a3a3a3; 
  cursor: pointer;
  /* :hover {border:rgb(42,134,129) 2px solid;
    transform: scale(1);
  } */

`;

const PlaceImg = styled.img`
margin: 3px;
  width: 90px;
  height: 90px;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px;
  width: 165px;
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
`;

const PlaceButtons = styled.div`
  width: 100%;
  height: 20%;
  text-align: right;

  background-color: white;
`;

function PlaceTable(props) {
  // const 함수이름 = () => {
  //  지금 과정이  여기서 부모한테 보내기 -> 부모에서 지도로 값 보내주기 -> 지도에서 값 사용하기
  // };
  const [positionG, setPositionG] = useRecoilState(positionState);
  const [levelG, setLevelG] = useRecoilState(levelState);

  const setMap = () => {
    setPositionG(props.position);
    setLevelG(props.level);
    console.log(positionG);
    console.log(levelG);
    console.log(positionG.lat);
  };

  return (
    <Wrapper>
      <PlaceList>
        <PlaceImg src={props.img} alt={props.name} />
        <PlaceInfo onClick={setMap}>
          <h4>{props.name}</h4>
          <h5>{props.tag}</h5>
          <PlaceButtons>
            <a href={props.link} target={"_blank"}>
              <IoInformationSharp />
            </a>
            <IoAddOutline />
          </PlaceButtons>
        </PlaceInfo>
      </PlaceList>
    </Wrapper>
  );
}

export default PlaceTable;
