import StatCards from "./StatCards"
import ActivityGraph from "./ActivityGraph"
const GridTemplate = () => {
  return (
    <div className="px-4 grid gap-3  grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
    <StatCards />
    <ActivityGraph />
    </div>
  )
} 

export default GridTemplate
 