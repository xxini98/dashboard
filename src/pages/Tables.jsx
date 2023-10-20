import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import Development from "../components/tables/Development";

const Tables = () => {
  return (
    <Layout title={"Tables"} pagename={"Tables"}>
      <Grid
        h={"calc(100vh - 225px)"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="tomato">
          <Development />
        </GridItem>

        <GridItem colSpan={1} bg="papayawhip">
          <Development />
        </GridItem>
        <GridItem colSpan={1} bg="papayawhip">
          <Development />
        </GridItem>
        <GridItem colSpan={1} bg="tomato">
          <Development />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Tables;
