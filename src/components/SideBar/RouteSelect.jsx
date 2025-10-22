import { useState } from "react";
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi"

const RouteSelect = () => {
  // track the index of the currently selected route (single selection)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={selectedIndex === 0} title="Dashboard" onClick={() => setSelectedIndex(0)} />
      <Route Icon={FiUsers} selected={selectedIndex === 1} title="Team" onClick={() => setSelectedIndex(1)} />
      <Route Icon={FiPaperclip} selected={selectedIndex === 2} title="Invoices" onClick={() => setSelectedIndex(2)} />
      <Route Icon={FiLink} selected={selectedIndex === 3} title="Integrations" onClick={() => setSelectedIndex(3)} />
      <Route Icon={FiDollarSign} selected={selectedIndex === 4} title="Finance" onClick={() => setSelectedIndex(4)} />
    </div>
  )
}

export default RouteSelect;

const Route = ({ selected, Icon, title, onClick = () => {} }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-start gap-2 cursor-pointer
        w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]
        ${selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}
        `}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  )
}
