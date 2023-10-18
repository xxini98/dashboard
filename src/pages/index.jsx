import React from "react";
import Title from "../components/title/Title";
import History from "../components/title/History";

const Home = () => {
  return (
    <div>
      <History pagename={"Dashboard"} />
      <Title title="홈" desc="이 페이지는 홈입니다." />
    </div>
  );
};

export default Home;
