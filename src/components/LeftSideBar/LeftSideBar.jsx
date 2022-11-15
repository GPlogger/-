import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #9e3333;
  align-content: center;
  width: 20%;
`;

const Profile = styled.img`
    
`

function LeftSideBar() {
  return (
    <Wrapper>
      <p>왼쪽 사이드 바</p>
    </Wrapper>
  );
}

export default LeftSideBar;