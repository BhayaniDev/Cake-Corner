import React from 'react'
import aboutImg from './img/about.jpg'
import './style.css'
import './Bootstrap.min.scss'

function About(props) {
	return (
		<>
			{/* About Start */}
			<div className="container-fluid pt-5">
				<div className="container">
					<div
						className="section-title position-relative text-center mx-auto mb-5 pb-3"
						style={{ maxWidth: '600px' }}
					>
						<h2 className="text-primary font-secondary">
							About Us
						</h2>
						<h1 className="display-4 text-uppercase">
							Welcome To {props.name}
						</h1>
					</div>
					<div className="row gx-5">
						<div
							className="col-lg-5 mb-5 mb-lg-0"
							style={{ minHeight: '400px' }}
						>
							<div className="position-relative h-100">
								<img
									className="position-absolute w-100 h-100 "
									alt="About Here"
									src={aboutImg}
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
						<div className="col-lg-6 pb-5">
							<h4 className="mb-4">
								Welcome to The Cake Corner, where delectable
								dreams and delightful flavors come to life!
							</h4>
							<p className="mb-5">
								Our story begins with a passion for baking and a
								commitment to delivering happiness in every
								bite. Founded with the idea that a slice of cake
								has the power to transform any moment into a
								special occasion, The Cake Corner is your
								one-stop shop for premium quality, handcrafted
								confections.
							</p>
							<div className="row g-5">
								<div className="col-sm-6">
									<div
										className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
										style={{
											width: '90px',
											height: '90px',
										}}
									>
										<i className="fa fa-heartbeat fa-2x text-white" />
									</div>
									<h4 className="text-uppercase">
										100% Healthy
									</h4>
									<p className="mb-0">
										We source the finest ingredients,
										ensuring that each cake is a masterpiece
										of freshness and taste.
									</p>
								</div>
								<div className="col-sm-6">
									<div
										className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
										style={{
											width: '90px',
											height: '90px',
										}}
									>
										<i className="fa fa-award fa-2x text-white" />
									</div>
									<h4 className="text-uppercase">
										Award Winning
									</h4>
									<p className="mb-0">
										We don't just sell cakes; we create
										memories.Join us in the celebration of
										life's sweet moments.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* About End */}
		</>
	)
}

export default About
