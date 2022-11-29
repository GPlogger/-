import React from "react";
import styled from "styled-components";

import { BsDot } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9px 12px 0px;
`;

function EstimatedTime() {
  return (
    <Wrapper>
        <DotLine></DotLine>
        <TimeBox>OO 시간</TimeBox>
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
`

const TimeBox = styled.div`
    display: flex;
    background-color: red;
    height: 20px;
    margin: 4px;
    align-items: center;
    justify-content: center;
`