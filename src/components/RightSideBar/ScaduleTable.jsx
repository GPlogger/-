import React from "react";
import styled from "styled-components";
import EstimatedTime from "./EstimatedTime";
import ScaduleBox from "./ScaduleBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;

`;

function ScaduleTable() {


  
  return (
    <Wrapper>
        <ScaduleBox></ScaduleBox>
        <EstimatedTime></EstimatedTime>
    </Wrapper>
  );
}

export default ScaduleTable;