import React from "react";
import styled from "styled-components";

const Text = styled.h3`
  font-family: S-CoreDream-4Regular;
  font-weight: 0.65rem;
`;

const Loading = () => (
  <div>
    <Text aria-label="loading" role="img">
      Loading...💧
    </Text>
  </div>
);

export default Loading;
