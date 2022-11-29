import React from "react";
import styled from "styled-components";
import { RecoilValue, useRecoilValue } from "recoil";
import { ScaduleState, TotalCountState, TotalTimeState } from "../recoil/Scadulestate";
import RightSideBar from "./RightSideBar";



function TotalTime(props) {
  const schedule = useRecoilValue(ScaduleState);
  const totalTime = useRecoilValue(TotalTimeState);
  const totalCount = useRecoilValue(TotalCountState);

  let hour = Math.floor(schedule.time / 60);
  let minute = Number(schedule.time) % 60;

  return (
    <Wrapper>
      {/* <TotalPlace>{test}&nbsp;</TotalPlace> */}
      <TotalPlace schedule={schedule}>{schedule.total}&nbsp;</TotalPlace>
      <h4>
        ({hour}시 {minute}분)
      </h4>
    </Wrapper>
  );
}

export default TotalTime;

const TotalPlace = styled.h1`
  ${(props) =>
    props.schedule.total === 0 ? { color: "rgb(148, 144, 143)" } : { color: "rgb(43, 62, 99)" }};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 8%;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-family: "GmarketSans";
`;