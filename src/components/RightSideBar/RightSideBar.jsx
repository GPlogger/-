import React from "react";
import styled from "styled-components";
import ScaduleTable from "./ScaduleTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 16%;
  height: 100%;
  background-color: rgb(247, 247, 247);
`;

function RightSideBar() {
  return (
    <Wrapper>
      <ScaduleTable></ScaduleTable>
    </Wrapper>
  );
}

export default RightSideBar;