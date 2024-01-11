import data from './data.json'
import GraphBar from './GraphBar'

const setHeight = (amount) => {
	const amounts = data.map((item) => item.amount)
	const max = Math.max(...amounts)
	return ((amount / max) * 175).toFixed(0)
}

const Graph = () => {
	const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
	let day = weekday[new Date().getDay()]

	return (
		<div className='flex items-end justify-between gap-x-5 mt-9 h-60'>
			{data.map((item) => (
				<GraphBar
					item={item}
					heightPx={setHeight(item.amount)}
					key={item.day}
					today={day === item.day}
				/>
			))}
		</div>
	)
}

export default Graph
