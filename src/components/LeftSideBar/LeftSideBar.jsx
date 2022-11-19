import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

import placelist from "../../placelist.json";

import PlaceSearchBox from "./PlaceSearchBox";
import PlaceSelector from "./PlaceSelector.jsx";
import PlaceTable from "./PlaceTable.jsx";

function LeftSideBar() {
  return (
    <Wrapper>
      <PlaceSelector />
      <PlaceSearchBox />
      <Wrapper2>
        {placelist.placelist.map((item) => (
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
