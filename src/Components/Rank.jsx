import React, { useEffect, useState } from "react";
import RankList from "./RankList";

const Rank = ({ data }) => {
  const [sortedData2019, setSortedData2019] = useState([]);
  const [sortedData2024, setSortedData2024] = useState([]);
  const [year2019, setYear2019] = useState(true);

  useEffect(() => {
    setSortedData2019([...data].sort((a, b) => {
      const aScore = parseInt(a["2019 score"]);
      const bScore = parseInt(b["2019 score"]);
      return bScore - aScore;
    }))
    
    setSortedData2024([...data].sort((a, b) => {
      const aScore = parseInt(a["2024 score"]);
      const bScore = parseInt(b["2024 score"]);
      return bScore - aScore;
    }))
  }, [data])

  const handle2019Year = () => {
    setYear2019(true);
  }
  
  const handle2024Year = () => {
    setYear2019(false);
  }

  return (
    <>
      <div className="">
        <div className="flex gap-4">
          <h2 className="font-semibold underline">Rank - </h2>

          {/* 2019 radio button */}
          <div onClick={handle2019Year}>
            <input type="radio" name="rank" id="2019" defaultChecked />
            <label htmlFor="2019">2019</label>
          </div>

          {/* 2024 radio button */}
          <div onClick={handle2024Year}>
            <input type="radio" name="rank" id="2024" />
            <label htmlFor="2024">2024</label>
          </div>
        </div>

        <RankList year2019={year2019} sortedData2019={sortedData2019} sortedData2024={sortedData2024} data={data} />
      </div>
    </>
  );
};

export default Rank;
