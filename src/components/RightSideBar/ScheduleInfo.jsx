import React from "react";
import styled from "styled-components";
import PlaceTime from "./PlaceTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 70px;
  background-color: none;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid black;
`;

const Title = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`;
const Time = styled.div`
  display: flex;
  margin-top: 6px;
  align-self: flex-end;
`;
function ScheduleInfo(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Time>
        <PlaceTime time={props.time} />
      </Time>
    </Wrapper>
  );
}

export default ScheduleInfo;
