import { React, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import placeList from "../../placelist.json";
import { FilterList } from "../recoil/Search";

import PlaceSearchBox from "./PlaceSearchBox";
import PlaceSelector from "./PlaceSelector.jsx";
import PlaceTable from "./PlaceTable.jsx";

function LeftSideBar() {

  const [filterList, setFilterList] = useRecoilState(FilterList);

  return (
    <Wrapper>
      <PlaceSearchBox />
      <PlaceSelector />
      <Wrapper2>
        {filterList.map((item) => (
          <PlaceTable
            key={item.id}
            name={item.title}
            img={item.thumbnail}
            tag={item.tag}
            link={item.link}
            position={item.position}
            level={item.level}
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
  background-color: rgb(247,247,247);
  align-content: center;
  width: 16%;
  height: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 806px;
  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #95929b; /* 스크롤바의 색상 */
    
    border-radius: 10px;
}

  ::-webkit-scrollbar-track {
    background: rgba(247, 247, 247, .1);  /*스크롤바 뒷 배경 색상*/
  }
`;
