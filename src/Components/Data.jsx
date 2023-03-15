import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      <>
        {data.map((element) => {
          return <div>{element.skill}</div>;
        })}
      </>
    </div>
  );
};

export default Data;
