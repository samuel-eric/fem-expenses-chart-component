const Balance = () => {
	return (
		<div className='bg-soft-red flex items-center p-9 w-2/5 max-w-3xl min-w-96 rounded-3xl'>
			<div className='mr-auto'>
				<p className='text-pale-orange'>My balance</p>
				<h3 className='text-pale-orange text-3xl font-bold'>$921.48</h3>
			</div>
			<div>
				<svg
					width='72'
					height='48'
					viewBox='0 0 72 48'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g fill='none' fillRule='evenodd'>
						<circle fill='#382314' cx='48' cy='24' r='24' />
						<circle stroke='#FFF' strokeWidth='2' cx='24' cy='24' r='23' />
					</g>
				</svg>
			</div>
		</div>
	)
}

export default Balance
