import React from 'react'

const Skill = ({data}) => {
  return (
    <>
      <div className=''>
        <h2 className='font-semibold underline'>Skills</h2>
          {data.map((element, index) => {
              return <div key={index}>{element.skill} -</div>
          })}
      </div>
    </>
  )
}

export default Skill
