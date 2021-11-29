import React from "react";
import { MdLocationOn } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { WiTime3 } from "react-icons/wi";
import { IoBag } from "react-icons/io";
const SearchListItem = ({ title, address, phoneNum, operatingTime, stock }) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>
        <MdLocationOn />
        {address}
      </span>
      <span>
        <ImPhone />
        {phoneNum}
      </span>
      <span>
        <WiTime3 />
        {operatingTime}
      </span>
      <span>
        <IoBag />
        {stock}
      </span>
    </div>
  );
};

export default SearchListItem;
