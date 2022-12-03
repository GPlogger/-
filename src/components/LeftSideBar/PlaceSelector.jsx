import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FilterList } from "../recoil/Search";
import placeList from "../../placelist.json";
import { FaMapMarked, FaHotel, FaShoppingCart } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

function PlaceSelector() {
  const [filterList, setFilterList] = useRecoilState(FilterList);
  const setFilterAll = () => {
    setFilterList(placeList.placelist);
  };

  const setFilterDestination = () => {
    setFilterList(
      placeList.placelist.filter((item) => item.Select.includes("관광지"))
    );
  };

  const setFilterAmenity = () => {
    setFilterList(
      placeList.placelist.filter((item) => item.Select.includes("숙소"))
    );
  };

  const setFilterRestaurant = () => {
    setFilterList(
      placeList.placelist.filter((item) => item.Select.includes("식당"))
    );
  };

  const setFilterShop = () => {
    setFilterList(
      placeList.placelist.filter((item) => item.Select.includes("쇼핑"))
    );
  };

  const setFilterEtc = () => {
    setFilterList(
      placeList.placelist.filter((item) => item.Select.includes("기타"))
    );
  };
  return (
    <Wrapper>
      <ImageBox onClick={setFilterAll}>
        <Image src="assets/img/PlaceSelect/All2.png" alt="전체"></Image>
      </ImageBox>
      <ImageBox onClick={setFilterDestination}>
        {/* <Image src="assets/img/PlaceSelect/TD.png" alt="관광지"></Image> */}
        <IconDestination />
      </ImageBox>
      <ImageBox onClick={setFilterAmenity}>
        {/* <Image src="assets/img/PlaceSelect/Hotel.png" alt="숙소"></Image> */}
        <IconAmenity />
      </ImageBox>
      <ImageBox onClick={setFilterRestaurant}>
        {/* <Image src="assets/img/PlaceSelect/Restaurant.png" alt="식당"></Image> */}
        <IconRestaurant />
      </ImageBox>
      <ImageBox onClick={setFilterShop}>
        {/* <Image src="assets/img/PlaceSelect/Shopping.png" alt="쇼핑"></Image> */}
        <IconShop />
      </ImageBox>
      <ImageBox onClick={setFilterEtc}>
        {/* <LastImage src="assets/img/PlaceSelect/Dots.png" alt="기타"></LastImage> */}
        <IconETC />
      </ImageBox>
    </Wrapper>
  );
}

export default PlaceSelector;

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: row;
  /* height: 5.8%; */
  height: 50px;
  background-color: rgb(177, 193, 187);
  /* border-right: 1px solid #e0e0e0; */
`;

const ALL = styled.div`
  color: #222;
  padding: 12px;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  padding: 12px;
  width: calc(100%);
  /* width: calc(100%/6); */
  &::after {
    width: 10px;
    height: 10px;
    background-color: red;
  }
  /* :hover {border:rgb(42,134,129) 2px solid;} */
`;
// const IconAll = styled()``;
const IconDestination = styled(FaMapMarked)`
  color: #222;
  padding: 12px;
  width: 100%;
  height: 100%;
`;
const IconAmenity = styled(FaHotel)`
  color: #222;
  padding: 12px;
  width: 100%;
  height: 100%;
`;
const IconRestaurant = styled(MdRestaurant)`
  color: #222;
  padding: 12px;
  width: 100%;
  height: 100%;
`;
const IconShop = styled(FaShoppingCart)`
  color: #222;
  padding: 12px;
  width: 100%;
  height: 100%;
`;
const IconETC = styled(BsThreeDots)`
  color: #222;
  padding: 12px;
  width: 100%;
  height: 100%;
`;

const LastImage = styled.img`
  padding: 15px;
  width: calc(100%);
  /* width: calc(100%/6); */
  :hover {
    transform: scale(0.8); /* 이미지 확대 */
    transition: transform 2s; /* 시간 설정 */
  }
`;
const ImageBox = styled.div`
  width: calc(100% / 6);
  padding: 1px;
  cursor: pointer;
  :hover {
    border: rgb(42, 134, 129) 2px solid;
  }
`;
