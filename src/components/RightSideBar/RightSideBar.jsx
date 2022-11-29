import React from "react";
import styled from "styled-components";
import ScheduleTable from "./ScheduleTable";
import TotalTime from "./TotalTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 300px;
  height: 100%;
  background-color: rgb(247, 247, 247);
`;

function RightSideBar() {
  return (
    <Wrapper>
      <TotalTime/>
      <ScheduleTable></ScheduleTable>
    </Wrapper>
  );
}

export default RightSideBar;