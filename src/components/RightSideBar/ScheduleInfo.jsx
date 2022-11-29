import React from "react";
import styled from "styled-components";
import PlaceTime from "./PlaceTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  background-color: #8196b4;
`;

const Title = styled.div`
    display: flex;

`
const Time = styled.div`
    display: flex;
`
function ScheduleInfo() {
  return (
    <Wrapper>
        <Title>여행지 제목</Title>
        <div>
        <PlaceTime></PlaceTime>
        </div>
    </Wrapper>
  );
}

export default ScheduleInfo;