import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
`;

const TagItem = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 16px;
  background-color: #0023eb;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  padding: 10px auto;
  font-size: 0.5rem;
`;

const Tag = ({ stock, price }) => (
  <TagContainer>
    <TagItem>
      <label>재고량</label>
      {stock}
    </TagItem>
    <TagItem>
      <label>가격</label>
      {price}
    </TagItem>
  </TagContainer>
);

export default Tag;
