/* eslint-disable react/prop-types */
import { useState } from 'react'

const GraphBar = ({ item, heightPx, today }) => {
	const [hover, setHover] = useState(false)

	const heightStyle = {
		height: `${heightPx}px`,
	}

	let barClass
	if (today) {
		if (hover) {
			barClass = 'bg-[#bbdade] w-12 rounded-md mx-auto'
		} else {
			barClass = 'bg-cyan w-12 rounded-md mx-auto'
		}
	} else {
		if (hover) {
			barClass = 'bg-[#f2a08f] w-12 rounded-md mx-auto'
		} else {
			barClass = 'bg-soft-red w-12 rounded-md mx-auto'
		}
	}

	return (
		<div
			className='flex-1 cursor-pointer relative'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{hover && (
				<div className='bg-dark-brown rounded-md text-pale-orange w-20 p-2 box-border mb-3 absolute text-center -top-14 -left-2.5'>
					${item.amount}
				</div>
			)}
			<div className={barClass} style={heightStyle}></div>
			<p className='text-medium-brown text-center'>{item.day}</p>
		</div>
	)
}

export default GraphBar
