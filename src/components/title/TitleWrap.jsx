import { Box } from "@chakra-ui/react";
import React from "react";
import History from "./History";
import Title from "./Title";

const TitleWrap = () => {
  return (
    <Box pl="20px">
      <History />
      <Title title="Tables" desc="이 페이지는 tables 페이지입니다." />
    </Box>
  );
};

export default TitleWrap;
