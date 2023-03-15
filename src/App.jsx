import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Data from './Components/Data'

function App() {

  const data = [
    {
      skill: 'Agility and Coordination',
      '2019 score': '64%',
      '2024 score': '71%',
    },
    {
      skill: 'Hunting and Predatory Skills',
      '2019 score': '76%',
      '2024 score': '70%',
    },
    {
      skill: 'Communication',
      '2019 score': '60%',
      '2024 score': '75%',
    },
    {
      skill: 'Adaptability',
      '2019 score': '82%',
      '2024 score': '63%',
    },
    {
      skill: 'Independence',
      '2019 score': '67%',
      '2024 score': '78%',
    },
    {
      skill: 'Affection and Socialization',
      '2019 score': '70%',
      '2024 score': '84%',
    },
    {
      skill: 'Climbing',
      '2019 score': '90%',
      '2024 score': '95%',
    },
    {
      skill: 'Balance',
      '2019 score': '88%',
      '2024 score': '96%',
    },
    {
      skill: 'Senses',
      '2019 score': '86%',
      '2024 score': '90%',
    },
    {
      skill: 'Flexibility',
      '2019 score': '75%',
      '2024 score': '83%',
    },
    {
      skill: 'Problem-solving',
      '2019 score': '67%',
      '2024 score': '78%',
    },
    {
      skill: 'Stealth',
      '2019 score': '59%',
      '2024 score': '72%',
    },
  ];

  return (
    <>
      <h1 className='bg-blue-400 p-4 text-white text-center'>Rank Calculator App</h1>
      <Data data={data} />
    </>
  )
}

export default App
