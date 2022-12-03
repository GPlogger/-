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
        <Hour placeholder={hour}/>
        <Mark>:</Mark>
        <Min placeholder={min}/>
    </Wrapper>
  );
}

export default PlaceTime;

const Hour = styled.input`
    width: 40px;
    height: 30px;
    text-align: center;
    font-size: 14pt;
`

const Mark = styled.span`
    
`

const Min = styled.input`
    width: 40px;
    height: 30px;
    text-align: center;
    font-size: 14pt;
`