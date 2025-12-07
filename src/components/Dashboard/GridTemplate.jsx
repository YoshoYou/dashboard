import StatCards from "./StatCards"
import ActivityGraph from "./ActivityGraph"
import UsageRadar from "./UsageRadar"
import RecentTransaction from "./RecentTransaction"
const GridTemplate = () => {
  return (
    <div className="px-4 grid gap-3  grid-cols-12">
    <StatCards />
    <ActivityGraph />
    <UsageRadar />
    <RecentTransaction />
    </div>
  )
} 

export default GridTemplate
 