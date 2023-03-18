import React from 'react'

const Score2019 = ({data}) => {
  return (
    <>
      <div className=''>
        <h2 className='font-semibold underline'>2019 scores</h2>
          {data.map((element, index) => {
              return <div key={index}>{element['2019 score']}</div>
          })}
      </div>
    </>
  )
}

export default Score2019
