import React from "react";
import Rank from "./Rank";
import Score2019 from "./Score2019";
import Score2024 from "./Score2024";
import Skill from "./Skill";

const Data = ({ data }) => {
  return (
    <>
      <div className="flex gap-5 mt-5">
        <div className="flex justify-around border-r-2 gap-5 w-3/5">
          <Skill data={data} />
          <Score2019 data={data} />
          <Score2024 data={data} />
        </div>
        <div>
          <Rank data={data} />
        </div>
      </div>
    </>
  );
};

export default Data;
