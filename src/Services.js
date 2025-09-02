import React from 'react'
import './style.css'
import './Bootstrap.min.scss'
import { Link } from 'react-router-dom'

function Services(props) {
	return (
		<>
			<div>
				<div
					className="container-fluid service position-relative px-5 mt-5"
					style={{ marginBottom: '135px' }}
				>
					<div className="container">
						<div className="row g-5">
							<div className="col-lg-4 col-md-6">
								<div className="bg-primary border-inner text-center text-white p-5">
									<h4 className="text-uppercase mb-3">
										Birthday Cake
									</h4>
									<p>
										We understand that birthdays are not
										just milestones; they are cherished
										moments of joy, laughter, and
										celebration. That's why we take immense
										pride in crafting birthday cakes that
										are as unique and special as the
										individuals they're meant for.
									</p>
									<Link
										className="text-uppercase text-dark"
										to="/menu1"
									>
										Order Now{' '}
										<i className="bi bi-arrow-right" />
									</Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="bg-primary border-inner text-center text-white p-5">
									<h4 className="text-uppercase mb-3">
										Wedding Cake
									</h4>
									<p>
										We understand that your wedding day is
										one of the most important and magical
										moments of your life. That's why we are
										dedicated to creating wedding cakes that
										are not just desserts but works of art,
										symbolizing the sweet beginning of your
										lifelong journey together.
									</p>
									<Link
										className="text-uppercase text-dark"
										to="/menu1"
									>
										Order Now{' '}
										<i className="bi bi-arrow-right" />
									</Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="bg-primary border-inner text-center text-white p-5">
									<h4 className="text-uppercase mb-3">
										Anniversary Cake
									</h4>
									<p>
										At The Cake Corner, we understand that
										every celebration is unique, and your
										cake should be too. That's why we take
										pride in offering a bespoke experience,
										allowing you to design a custom cake
										that perfectly reflects your vision,
										taste, and style.
									</p>
									<Link
										className="text-uppercase text-dark"
										to="/menu1"
									>
										Order Now{' '}
										<i className="bi bi-arrow-right" />
									</Link>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 text-center">
								<h1 className="text-uppercase text-light mb-4">
									30% Discount For This Summer
								</h1>
								<Link
									to="/menu1"
									className="btn btn-primary border-inner py-3 px-5"
								>
									Order Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services
