import React from "react";
import styled from "styled-components";
import ScaduleTable from "./ScaduleTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
  align-content: center;
  width: 16%;
  background-color: greenyellow;
`;

const Profile = styled.img`
    
`

function RightSideBar() {
  return (
    <Wrapper>
      <ScaduleTable></ScaduleTable>
    </Wrapper>
  );
}

export default RightSideBar;