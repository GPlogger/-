import { React, useState, useEffect } from "react";
import styled from "styled-components";

import placelist from "../../placelist.json";

import PlaceSelector from "./PlaceSelector.jsx";
import PlaceTable from "./PlaceTable.jsx";

function LeftSideBar() {
  return (
    <Wrapper>
      <PlaceSelector />
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
  background-color: #edfcfd;
  align-content: center;
  width: 16%;
  height: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 785px;
`;
