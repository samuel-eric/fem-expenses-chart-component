import Summary from './Summary'

const Spending = () => {
	return (
		<div className='bg-white rounded-3xl mt-6 p-9 w-2/5 max-w-3xl min-w-96'>
			<h1 className='text-3xl font-bold text-dark-brown'>
				Spending - Last 7 days
			</h1>
			{/* Graph component */}
			<Summary />
		</div>
	)
}

export default Spending
