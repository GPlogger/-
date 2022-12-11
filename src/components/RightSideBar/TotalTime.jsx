import React from "react";
import styled from "styled-components";
import { RecoilValue, useRecoilState, useRecoilValue } from "recoil";
import { ScheduleState, ScheduleListState } from "../recoil/Schedulestate";
import { distancesState, pathState } from "../recoil/MapStates";
import { BiRefresh } from "react-icons/bi";

function TotalTime(props) {
  const [scheduleList, setScheduleList] = useRecoilState(ScheduleListState);
  const [schedule, setSchedule] = useRecoilState(ScheduleState);
  const [paths, setPaths] = useRecoilState(pathState);
  const [distances, setDistances] = useRecoilState(distancesState);

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
      <Row>
        <TotalPlace schedule={schedule}>{schedule.total}&nbsp;</TotalPlace>
        <Time>
          ({hour}시 {minute}분)
        </Time>
        <Button
          onClick={() => {
            setDistances([]);
            setPaths([]);
            setSchedule({ time: 0, total: 0 });
            setScheduleList([]);
          }}
        >
          <IconReset />
        </Button>
      </Row>
    </Wrapper>
  );
}

export default TotalTime;

const TotalPlace = styled.h1`
  ${(props) =>
    props.schedule.total === 0
      ? { color: "rgb(148, 144, 143)" }
      : { color: "rgb(88, 104, 86)" }};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 70px;
  background-color: rgb(233, 245, 231);
  justify-content: center;
  align-items: center;
  font-family: "GmarketSans";
  /* border-bottom: 1px solid #aaa; */
  box-shadow: 0px -5px 18px -3px #999;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Time = styled.p`
  display: flex;
  font-size: 16px;
  color: #313131;
  margin-top: 4px;
  margin-left: 5px;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 28px;
  transform: translate(0, -50%);
  width: 26px;
  height: 26px;
  border: none;
  background: rgba(0, 0, 0, 0);
`;
const IconReset = styled(BiRefresh)`
  width: 100%;
  height: 100%;
  color: #666;
  &:hover {
    color: #333;
  }
`;
