import './App.css'
import Dashboar from './components/Dashboard/Dashboar'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <div className=''>
      <div className=" text-stone-950 grid gap-4 p-4 sm:grid-cols-[220px_minmax(300px,_1fr)] grid-cols-[102px_minmax(300px,_1fr)]">
       <SideBar />
        <Dashboar />
      </div>
    </div>
  )
}

export default App
