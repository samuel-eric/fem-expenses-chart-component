const Summary = () => {
	return (
		<div className='flex items-end justify-between border-t border-cream pt-5 mt-5 md:pt-6 md:mt-6'>
			<div>
				<p className='text-medium-brown text-base'>Total this month</p>
				<h2 className='text-dark-brown text-3xl md:text-5xl font-bold'>
					$478.33
				</h2>
			</div>
			<div className='text-right'>
				<strong className='text-dark-brown'>+2.4%</strong>
				<p className='text-medium-brown text-base'>from last month</p>
			</div>
		</div>
	)
}

export default Summary
