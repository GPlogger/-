import React from "react";
import styled from "styled-components";
import EstimatedTime from "./EstimatedTime";
import ScheduleBox from "./ScheduleBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  /* height: 1000px;/ */
  height: 120px;
  width: 100%;
`;

function ScheduleTable(props) {

  
  return (
    <Wrapper>
        <ScheduleBox 
        id = {props.id}
        title={props.title}
        time={props.time}
        />
        <EstimatedTime />
    </Wrapper>
  );
}

export default ScheduleTable;