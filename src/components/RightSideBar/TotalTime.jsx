import React from "react";
import styled from "styled-components";
import { RecoilValue, useRecoilState, useRecoilValue } from "recoil";
import {
  ScheduleState,
} from "../recoil/Schedulestate";
import { distancesState } from "../recoil/MapStates";

function TotalTime(props) {
  const distances = useRecoilValue(distancesState);
  const schedule = useRecoilValue(ScheduleState);
  let tmp = 0;
  distances.map((item, idx) => {
    if (idx !== 0) {
      tmp = tmp + Math.floor(item / 600);
    }
  });
  tmp = tmp + schedule.time;
  let hour = Math.floor(tmp / 60);
  let minute = Number(tmp) % 60;

  return (
    <Wrapper>
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
