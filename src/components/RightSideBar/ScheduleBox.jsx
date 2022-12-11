import React from "react";
import styled from "styled-components";
import MoveButtonBox from "./MoveButtonBox";
import ScheduleInfo from "./ScheduleInfo";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100%;
  margin: 10px 0px 0px;
  width: 270px;
  background-color: white;
`;

function ScheduleBox(props) {
  return (
    <Wrapper>
      <MoveButtonBox id={props.id} time={props.time} idx={props.idx} />
      <ScheduleInfo title={props.title} time={props.time} />
    </Wrapper>
  );
}
export default ScheduleBox;
