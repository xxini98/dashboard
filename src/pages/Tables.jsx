import React from "react";
import Title from "../components/title/Title";
import History from "../components/title/History";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const Tables = () => {
  return (
    <div>
      <Box pl="10px">
        <History pagename="Tables" />
        <Title title="Tables" desc="이 페이지는 tables 페이지입니다." />
      </Box>

      <Grid
        h={"calc(100vh - 220px)"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="tomato" />
      </Grid>
    </div>
  );
};

export default Tables;
