import TopBar from "./TopBar"
import GridTemplate from './GridTemplate'
import UsageRadar from "./UsageRadar"
import { LuArrowRightFromLine } from "react-icons/lu"
import { IoArrowRedoCircle } from "react-icons/io5"
import { MdDoubleArrow } from "react-icons/md"
import SideBar from "../SideBar/SideBar"
const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow  ">
      <TopBar />
      <GridTemplate />
    </div>
  )
}

export default Dashboard
