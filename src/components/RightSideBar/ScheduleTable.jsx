import React from "react";
import styled from "styled-components";
import EstimatedTime from "./EstimatedTime";
import ScheduleBox from "./ScheduleBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 100%;

`;

function ScheduleTable() {


  
  return (
    <Wrapper>
        <ScheduleBox></ScheduleBox>
        <EstimatedTime></EstimatedTime>
    </Wrapper>
  );
}

export default ScheduleTable;