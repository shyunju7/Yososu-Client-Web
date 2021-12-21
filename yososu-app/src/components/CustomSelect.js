import styled from "styled-components";
import { useState } from "react";

const SelectBox = styled.div`
  position: relative;
  width: 90%;
  border: 2px solid #f5f5f5;
  padding: 8px;
  margin-top: 12px;
  border-radius: 12px;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px #dddddd;
  align-self: center;
  &::before {
    content: "⌵";
    position: absolute;
    top: 0px;
    right: 8px;
    color: #0023eb;
    font-size: 24px;
  }
`;

const Label = styled.label`
  margin-left: 4px;
  text-align: center;
`;

const SelectOption = styled.ul`
  position: absolute;
  list-style: none;
  top: 32px;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "none" : 0)};
  padding: 0;
  border-radius: 8px;
  background: #a7a7a7;
  color: #ffffff;
  transition: 0.5s ease-in;
`;

const OptionItem = styled.li`
  font-size: 14px;
  padding: 6px 12px;
  transition: 0.1s ease-in;
  &:hover {
    background-color: #667bf3;
  }
`;

const OptionValue = [
  { key: "강원도", value: "강원" },
  { key: "경기도", value: "경기" },
  { key: "경상남도", value: "경남" },
  { key: "경상북도", value: "경북" },
  { key: "대구광역시", value: "대구" },
  { key: "대전광역시", value: "대전" },
  { key: "부산광역시", value: "부산" },
  { key: "서울특별시", value: "서울" },
  { key: "세종자치시", value: "세종" },
  { key: "울산광역시", value: "울산" },
  { key: "인천광역시", value: "인천" },
  { key: "전라남도", value: "전남" },
  { key: "전라북도", value: "전북" },
  { key: "제주특별자치도", value: "제주" },
  { key: "충청남도", value: "충남" },
  { key: "충청북도", value: "충북" },
];
const CustomSelect = ({ changeLocation }) => {
  const [showOption, setShowOption] = useState(false);

  const [currentOption, setCurrentOption] = useState("강원도");

  const handleChangeOption = (e) => {
    console.log(`current,`, e.target.innerText);
    setCurrentOption(e.target.innerText);
    setShowOption(!showOption);
    changeLocation(e.target.innerText);
  };

  return (
    <SelectBox onClick={() => setShowOption(!showOption)}>
      <Label>{currentOption}</Label>
      <SelectOption show={showOption}>
        {OptionValue.map((option) => {
          return (
            <OptionItem
              key={option.key}
              value={option.value}
              onClick={handleChangeOption}
            >
              {option.key}
            </OptionItem>
          );
        })}
      </SelectOption>
    </SelectBox>
  );
};

export default CustomSelect;
