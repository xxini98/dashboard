// 여기에다가 chakra 글로벌 스타일 시트 정의하기

import { extendTheme } from "@chakra-ui/react";
import { textTheme } from "./components/Text";
import { tableTheme } from "./components/table";
import { progressTheme } from "./components/progress";
// import { containerTheme } from "./components/container";

const theme = extendTheme({
  components: {
    // Container: containerTheme,
    Text: textTheme,
    Table: tableTheme,
    Progress: progressTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "white",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: "400",
        color: "#2B3674",
      },
      // styles for the `a`
      a: {
        color: "#000000",
        _hover: {
          textDecoration: "none !important",
        },
      },
      li: {
        listStyle: "none",
      },
    },
  },
  space: {
    4: "25px",
  },
  colors: {
    secondary_7: "#707eae",
    secondary_grey_600: "##A3AED0",
  },
});
export default theme;
