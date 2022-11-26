import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

`;

function PlaceTime() {
  return (
    <Wrapper>
        <Hour></Hour>
        <Mark>:</Mark>
        <Min></Min>
    </Wrapper>
  );
}

export default PlaceTime;

const Hour = styled.span`
    
`

const Mark = styled.span`
    
`

const Min = styled.span`
    
`