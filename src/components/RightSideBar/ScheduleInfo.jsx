import React from "react";
import styled from "styled-components";
import PlaceTime from "./PlaceTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 70px;
  background-color: #8196b4;
`;

const Title = styled.div`
    display: flex;

`
const Time = styled.div`
    display: flex;
`
function ScheduleInfo(props) {
  return (
    <Wrapper>
        <Title>{props.title}</Title>
        <div>
        <PlaceTime time={props.time}/>
        </div>
    </Wrapper>
  );
}

export default ScheduleInfo;