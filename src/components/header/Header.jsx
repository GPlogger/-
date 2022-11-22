import React from "react";
import styled from "styled-components";
import {} from "react-icons";

// const 원하는이름 = styled.태그명
const Wrapper = styled.div`
  display: flex; // flex는 방향지정 필요
  z-index: 500;
  flex-direction: row; // row : 가로   컬럼 : 세로
  width: 100%;
  height: 66px; // 66px
  background-color: rgb(255, 250, 240);
  justify-content: center;
  align-items: center;
  font-family: "Jejudoldam";
  font-size: 24px;
  /* padding: 17px; */
  color: #252525;
  box-shadow: 0px -5px 18px -3px #999;
`;

const Logo = styled.img`
  height: auto;
  width: 45px;
  margin-left: 15px;
`;

function Header() {
  return (
    <Wrapper>
      <h2>여행도 제주껏</h2>
      <Logo src="assets/img/gyul.png" alt="아무튼 한라봉" />
    </Wrapper>
  );
}

export default Header;
