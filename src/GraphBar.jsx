/* eslint-disable react/prop-types */
const GraphBar = ({ item, heightPx, today }) => {
	const heightStyle = {
		height: `${heightPx}px`,
	}

	let barClass
	if (today) {
		barClass = 'bg-cyan w-full rounded-md'
	} else {
		barClass = 'bg-soft-red w-full rounded-md'
	}

	return (
		<div className='flex-1 self-end'>
			<div className={barClass} style={heightStyle}></div>
			<p className='text-medium-brown text-center'>{item.day}</p>
		</div>
	)
}

export default GraphBar
