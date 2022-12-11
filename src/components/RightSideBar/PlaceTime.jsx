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
      <Hour>{("00" + hour).slice(-2)}</Hour>
      <Mark>:</Mark>
      <Min>{("00" + min).slice(-2)}</Min>
    </Wrapper>
  );
}

export default PlaceTime;

const Hour = styled.div`
  text-align: center;
  font-size: 17px;
  font-family: "Clock";
`;

const Mark = styled.span`
  font-family: "Clock";
  font-size: 17px;
  margin: 0 10px;
`;

const Min = styled.div`
  text-align: center;
  font-size: 17px;
  font-family: "Clock";
  margin-right: 8px;
`;
