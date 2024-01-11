const Summary = () => {
	return (
		<div className='flex items-end justify-between border-t border-cream pt-6 mt-6'>
			<div>
				<p className='text-medium-brown'>Total this month</p>
				<h2 className='text-dark-brown text-5xl font-bold'>$478.33</h2>
			</div>
			<div className='text-right'>
				<strong className='text-dark-brown'>+2.4%</strong>
				<p className='text-medium-brown'>from last month</p>
			</div>
		</div>
	)
}

export default Summary
