import React from "react";
import { MdLocationOn } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { WiTime3 } from "react-icons/wi";
import { IoBagOutline } from "react-icons/io5";
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
        <IoBagOutline />
        {stock}
      </span>
    </div>
  );
};

export default SearchListItem;
