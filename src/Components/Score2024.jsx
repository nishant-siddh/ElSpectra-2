import React from 'react'

const Score2024 = ({data}) => {
  return (
    <>
      <div className=''>
        <h2 className='font-semibold underline'>2024 scores</h2>
          {data.map((element, index) => {
              return <div key={index}>{element['2024 score']}</div>
          })}
      </div>
    </>
  )
}

export default Score2024