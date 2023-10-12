import React from "react";

const Title = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Title;
