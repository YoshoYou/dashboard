import { LuArrowRightFromLine } from "react-icons/lu"
import GridTemplate from "../Dashboard/GridTemplate"
import AccountToggle from "./AccountToggle"
import Plan from "./Plan"
import RouteSelect from "./RouteSelect"
import Search from "./Search"

const SideBar = () => {
  return (
    <div className="hidden sm:block ">
        <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
            {/* .....to do main sidebar content.... */}
            <AccountToggle />
            <Search />
            <RouteSelect />
        </div>

        {/* .....to do plan toggle..... */}
        <Plan />
    </div>
  )
}

export default SideBar
