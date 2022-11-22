import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { FilterList } from "../recoil/Search";
import placeList from "../../placelist.json";
import { RoadviewInfoWindow } from "react-kakao-maps-sdk";

function PlaceSearchBox() {
  const [filterList, setfilterList] = useRecoilState(FilterList);
  const [keyword, setKeyword] = useState("");

  const _setFilterList = () => {
    setfilterList(
      keyword !== ""
        ? placeList.placelist.filter((item) => item.title.includes(keyword))
        : placeList.placelist
    );
  };

  // 엔터 눌렀을 때
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      console.log("엔터");
      _setFilterList();
    }
  };

  return (
    <Wrapper>
      <SearchBox>
        <InputBox
          type="text"
          value={keyword}
          placeholder="검색어 입력"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={onEnterPress}
        />
        <SearchButton onClick={_setFilterList}>
          <AiOutlineSearch style={{ color: "black" }} />
        </SearchButton>
      </SearchBox>
    </Wrapper>
  );
}

export default PlaceSearchBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 55px;
  width: 100%;
  background-color: white;
  padding: 10px;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  border: 1px solid rgb(148, 185, 143);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InputBox = styled.input`
  display: flex;
  font-size: 16px;
  height: 100%;
  padding: 10px;
  outline: none;
  float: left;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const SearchButton = styled.button`
  display: flex;
  border: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(237, 237, 229);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  outline: none;
  float: right;
  color: #ffffff;
`;
