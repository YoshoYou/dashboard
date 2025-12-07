import { useEffect, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <div className=''>
      <div className=" text-stone-950 grid gap-4 p-4 sm:grid-cols-[220px_minmax(300px,_1fr)] grid-cols-[1fr]">
       <SideBar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
