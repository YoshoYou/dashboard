import { FiCalendar } from "react-icons/fi"

const TopBar = () => {
  return (
    <div className="border-b border-stone-300 px-4 mb-4 mt-2 pb-4">
      <div className="flex  justify-between items-center p-0.5">
        <div className="">
        <span className="text-sm font-bold block">Good Morning, Aya !</span>
        <span className="text-xs block text-stone-500">Wed, Oct 22th 2025</span>
        </div>
        <button className="flex text-sm items-center gap-2 bg-stone-100
        transition-colors hover:bg-violet-100 hover:text-violet-700 px-3
        py-1.5 rounded cursor-pointer">
            <FiCalendar />
            <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  )
}

export default TopBar
