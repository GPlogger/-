import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { distancesState } from "../recoil/MapStates";

function EstimatedTime(props) {

  const hour = Math.floor(props.time / 600 / 60);
  const min = Math.floor((props.time / 600) % 60);
  const total = hour * 60 + min;



  return (
    <Wrapper time={props.time}>
      <DotLine></DotLine>
      <TimeBox>{total}분</TimeBox>
    </Wrapper>
  );
}

export default EstimatedTime;

const DotLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  width: 34px;
  border: none;
  border-right: 4px dotted grey;
`;

const TimeBox = styled.div`
  display: flex;
  background-color: white;
  height: 30px;
  margin: 0% 3%;
  width: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: ${(props) => (props.time > 0 ? "flex" : "none")};
  flex-direction: row;
  margin: 9px 12px 0px;
`;
