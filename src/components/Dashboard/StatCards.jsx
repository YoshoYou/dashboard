import { FiTrendingDown, FiTrendingUp } from "react-icons/fi"

const StatCards = () => {
  return (
    <>
    <Card title="Gross Revenue" value="$120,054,24" pillText="2.75%" trend="up" period="From Jan 1st - Jul 31st">meme</Card>
    <Card title="Avg Order" value="$27.97" pillText="1.01%" trend="down" period="From Jan - Jul 31st">lili</Card>
    <Card title="Trailing Year" value="$278,054,24" pillText="60.75%" trend="up" period="Previous 365 days">lolo</Card>
    </>
  )
}

export default StatCards
const Card = ({title,value,pillText,trend,period}) => {
    return <div className="p-4 rounded border
     border-stone-300 col-span-12  md:col-span-6 lg:col-span-4">
        <div className="flex mb-2 items-start justify-between p-1">
            <div>
                <h3 className="text-stone-500 mb-2 text-sm w-fit">
                    {title}
                </h3>
                
            </div>

            <span className={`text-xs flex items-center gap-1 font-medium
                px-2 py-1 rounded ${trend === "up" ?"bg-green-100 text-green-700"
                :"bg-red-100 text-red-700"}`}>
                    {trend === "up"?<FiTrendingUp /> :<FiTrendingDown />}
                {pillText}
            </span>
        </div>
                    <span>
            <p className="text-3xl font-semibold mb-4 "> {value}</p>

            </span>
        <p className="text-xs text-stone-500">{period}</p>
    </div>
}