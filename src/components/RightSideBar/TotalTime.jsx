import React from "react";
import styled from "styled-components";
import { RecoilValue, useRecoilValue } from "recoil";
import {
  ScheduleState,
  TotalCountState,
  TotalTimeState,
} from "../recoil/Schedulestate";
import RightSideBar from "./RightSideBar";
import { distancesState } from "../recoil/MapStates";
import { useState } from "react";
import { useEffect } from "react";

function TotalTime(props) {
  const distances = useRecoilValue(distancesState);
  const schedule = useRecoilValue(ScheduleState);
  const [tmp, setTmp] = useState();
  const [scheduleTmp, setScheduleTmp] = useState(tmp + schedule.time);
  let hour = Math.floor(scheduleTmp / 60);
  let minute = Number(scheduleTmp) % 60;

  useEffect(() => {
    distances.map(
      (item, idx) => idx !== 0 && setTmp(tmp + Math.floor(item / 600))
    );
    hour = Math.floor(scheduleTmp / 60);
    minute = Number(scheduleTmp) % 60;
    console.log("schedule",schedule.time);
    console.log("tmp",tmp);
  }, [schedule, distances]);

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
    props.schedule.total === 0
      ? { color: "rgb(148, 144, 143)" }
      : { color: "rgb(43, 62, 99)" }};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 8%;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-family: "GmarketSans";
  /* box-shadow: 0px -5px 18px -3px #999; */
`;
