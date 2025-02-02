import { React, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import placeList from "../../placelist.json";
import { ScheduleListState } from "../recoil/Schedulestate";
import { FilterList } from "../recoil/Search";

import PlaceSearchBox from "./PlaceSearchBox";
import PlaceSelector from "./PlaceSelector.jsx";
import PlaceTable from "./PlaceTable.jsx";

function LeftSideBar() {
  const [filterList, setFilterList] = useRecoilState(FilterList);
  const [scheduleList, setScheduleList] = useRecoilState(ScheduleListState);

  const [tmp, setTmp] = useState(
    filterList.filter((item) => {
      if (
        scheduleList.length > 0 &&
        !scheduleList.map((i) => i.id).includes(item.id)
      ) {
        return item;
      } else if (scheduleList.length === 0) {
        return item;
      }
    })
  );

  useEffect(() => {
    setTmp(
      filterList.filter((item) => {
        if (
          scheduleList.length > 0 &&
          !scheduleList.map((i) => i.id).includes(item.id)
        ) {
          return item;
        } else if (scheduleList.length === 0) {
          return item;
        }
      })
    );
    // setFilterList(tmp);
  }, [filterList, scheduleList]);

  return (
    <Wrapper>
      <PlaceSearchBox />
      <PlaceSelector />
      <Wrapper2>
        {tmp.map((item) => (
          <PlaceTable
            key={item.id}
            id={item.id}
            name={item.title}
            img={item.thumbnail}
            tag={item.tag}
            link={item.link}
            position={item.position}
            level={item.level}
            time={item.time}
          />
        ))}
      </Wrapper2>
    </Wrapper>
  );
}

export default LeftSideBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 247, 247);
  align-content: center;
  width: 300px;
  /* width: 16%; */
  height: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
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
