import React from "react";
import styled from "styled-components";
import ScaduleBox from "./ScaduleBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  height: 852px;

`;

function ScaduleTable() {
  return (
    <Wrapper>
        <ScaduleBox></ScaduleBox>
    </Wrapper>
  );
}

export default ScaduleTable;