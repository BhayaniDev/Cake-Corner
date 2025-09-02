import React from 'react'

function TopBar(props) {
	return (
		<>
			<div className="container-fluid bg-dark bg-img p-5 mb-5">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="display-4 text-uppercase text-white">
							{props.title}
						</h1>
						<a href="/">Home</a>
						<i className="far fa-square text-primary px-2"></i>
						<a href="/">{props.title}</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default TopBar
