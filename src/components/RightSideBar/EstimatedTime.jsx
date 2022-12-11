import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { BsDot } from "react-icons/bs";
import { totalTimeListState } from "../recoil/Schedulestate";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9px 12px 0px;
`;

function EstimatedTime(props) {

  const hour = Math.floor(props.time / 600 / 60);
  const min = Math.floor(props.time / 600 % 60);
  const total = hour*60 + min;



  return (
    <Wrapper>
      <DotLine></DotLine>
      <TimeBox placeholder={total} />
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
    border-right: 4px dotted black;
    border-color: grey;    
`

const TimeBox = styled.input`
  display: flex;
  background-color: white;
  height: 30px;
  margin: 0% 3%;
  width: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;