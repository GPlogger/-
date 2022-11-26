import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
  background-color: goldenrod;
`;

const Title = styled.div`
    display: flex;

`
const Time = styled.div`
    display: flex;
`
function ScaduleInfo() {
  return (
    <Wrapper>
        <Title>여행지 제목</Title>
        <div>
        <Time>여행지 시간</Time>
        </div>
    </Wrapper>
  );
}

export default ScaduleInfo;