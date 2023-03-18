import React from "react";

const RankList = ({ year2019, sortedData2019, sortedData2024, data }) => {
  const sortedData = year2019 ? sortedData2019 : sortedData2024;

  return (
    <div>
      {data.map((dataElement) => {
        // debugger
        const rank = sortedData.findIndex(item => item.skill === dataElement.skill) + 1;

        return (
          <div key={dataElement.skill}>{dataElement.skill} ({dataElement[year2019 ? '2019 score' : '2024 score']}) :- <b>{rank}
            {
              rank === 1 ? 'st' 
                : rank === 2 ? 'nd' 
                : rank === 3 ? 'rd' 
                : 'th'
            }</b>
          </div>
        )
      })}
    </div>
  );
};

export default RankList;
