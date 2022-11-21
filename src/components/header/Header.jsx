import React from "react";
import styled from "styled-components";

// const 원하는이름 = styled.태그명
const Wrapper = styled.div`
  display: flex; // flex는 방향지정 필요
  flex-direction: row; // row : 가로   컬럼 : 세로
  width: 100%;
  height: 80px;
  background-color: rgb(194,202,143 );
  justify-content: center;
  border-bottom: 1px solid rgb(241,241,241);
  font-family: "Nanum";
  font-size: 25px;
  padding: 17px;
`;

const Logo = styled.img`
  height: 60px;
  margin: 10px;
`;

function Header() {
  return (
    <Wrapper>
      <h2>여행도 제주껏</h2>
      {/* <Logo src="assets/img/logo1.png" alt="여행도 제주껏" /> */}
    </Wrapper>
  );
}

export default Header;