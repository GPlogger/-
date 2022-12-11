import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function PlaceTime(props) {
  const hour = Math.floor(props.time / 60);
  const min = props.time % 60;

  return (
    <Wrapper>
        <Hour>{hour}</Hour>
        <Mark>:</Mark>
        <Min>{min}</Min>
    </Wrapper>
  );
}

export default PlaceTime;

const Hour = styled.div`
    width: 40px;
    height: 30px;
    text-align: center;
    font-size: 14pt;
`

const Mark = styled.span`
    
`

const Min = styled.div`
    width: 40px;
    height: 30px;
    text-align: center;
    font-size: 14pt;
`