import React from "react";
import styled from "styled-components";
import ScheduleTable from "./ScheduleTable";
import TotalTime from "./TotalTime";
import { useRecoilState, useRecoilValue } from "recoil";
import { moveTimeListState, ScheduleListState } from "../recoil/Schedulestate";
import { distancesState } from "../recoil/MapStates";
import { useEffect } from "react";

function RightSideBar(props) {
  const scheduleList = useRecoilValue(ScheduleListState);
  const distance = useRecoilValue(distancesState);
  // 스케줄에 표시되는 도착예상시각 리스트
  const [moveTimeList, setMoveTimeList] = useRecoilState(moveTimeListState);
  // useEffect(()=>{},[distance])

  return (
    <Wrapper>
      <TotalTime />
      <ScheduleScroll>
        {scheduleList.map((item, idx) => (
          <ScheduleTable
            key={item.id}
            id={item.id}
            title={item.title}
            time={item.time}
            moveTime={distance[idx + 1]}
            idx={idx}
          />
        ))}
      </ScheduleScroll>
    </Wrapper>
  );
}

export default RightSideBar;

const ScheduleScroll = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #95929b; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(247, 247, 247, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 300px;
  height: 100%;
  background-color: #fff;
`;
