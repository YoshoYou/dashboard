import React, { Suspense, lazy } from "react"
import StatCards from "./StatCards"
const ActivityGraph = lazy(() => import("./ActivityGraph"))
const UsageRadar = lazy(() => import("./UsageRadar"))
import RecentTransaction from "./RecentTransaction"

const GridTemplate = () => {
  return (
    <div className="px-4 grid gap-3  grid-cols-12">
      <StatCards />

      <Suspense fallback={<div className="col-span-12 lg:col-span-8 p-4">Loading chart...</div>}>
        <ActivityGraph />
      </Suspense>

      <Suspense fallback={<div className="col-span-12 lg:col-span-4 p-4">Loading chart...</div>}>
        <UsageRadar />
      </Suspense>

      <RecentTransaction />
    </div>
  )
}

export default GridTemplate
 