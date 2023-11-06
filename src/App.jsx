import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SkillList from './SkillList.jsx'
import NewSkillForm from './NewSkillForm'

import './App.css'

export default function App() {

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <NewSkillForm />
    </div>
  );

}

