import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = ({ list }) => {
  return (
    <div>
      {list.length > 0 ? (
        list.map((item, index) => (
          <SearchListItem
            key={index}
            title={item.title}
            operatingTime={item.operatingTime}
            address={item.address}
            stock={item.stock}
          />
        ))
      ) : (
        <span> 조회 데이터가 없습니다.</span>
      )}
    </div>
  );
};

export default SearchList;
