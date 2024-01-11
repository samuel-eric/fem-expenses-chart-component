import Summary from './Summary'
import Graph from './Graph'

const Spending = () => {
	return (
		<div className='bg-white p-5 box-border w-11/12 rounded-lg mt-6 max-w-sm sm:rounded-2xl md:max-w-md lg:w-2/5 lg:max-w-3xl lg:p-9 lg:rounded-3xl'>
			<h1 className='text-2xl sm:text-3xl font-bold text-dark-brown'>
				Spending - Last 7 days
			</h1>
			<Graph />
			<Summary />
		</div>
	)
}

export default Spending
