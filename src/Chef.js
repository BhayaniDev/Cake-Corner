import React from 'react'
import './style.css'
import './Bootstrap.min.scss'
import chef1 from './img/team-1.jpg'
import chef2 from './img/team-2.jpg'
import chef3 from './img/team-3.jpg'

function Chef(props) {
	return (
		<>
			<div>

				<div className="container-fluid py-5">
					<div className="container">
						<div
							className="section-title position-relative text-center mx-auto mb-5 pb-3"
							style={{ maxWidth: '600px' }}
						>
							<h2 className="text-primary font-secondary">
								Team Members
							</h2>
							<h1 className="display-4 text-uppercase">
								Our Master Chefs
							</h1>
						</div>
						<div className="row g-5">
							<div className="col-lg-4 col-md-6">
								<div className="team-item">
									<div className="position-relative overflow-hidden">
										<img
											className="img-fluid w-100"
											src={chef1}
											alt=""
										/>
										<div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
											<div className="d-flex align-items-center justify-content-start">
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://twitter.com"
												>
													<i className="fab fa-twitter fw-normal" />
												</a>
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://facebook.com/"
												>
													<i className="fab fa-facebook-f fw-normal" />
												</a>
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://linkedin.com/"
												>
													<i className="fab fa-linkedin-in fw-normal" />
												</a>
											</div>
										</div>
									</div>
									<div className="bg-dark border-inner text-center p-4">
										<h4 className="text-uppercase text-primary">
											James Smith
										</h4>
										<p className="text-white m-0">
											Head Pastry Chef
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="team-item">
									<div className="position-relative overflow-hidden">
										<img
											className="img-fluid w-100"
											src={chef2}
											alt=""
										/>
										<div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
											<div className="d-flex align-items-center justify-content-start">
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://twitter.com"
												>
													<i className="fab fa-twitter fw-normal" />
												</a>
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://facebook.com/"
												>
													<i className="fab fa-facebook-f fw-normal" />
												</a>
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://linkedin.com"
												>
													<i className="fab fa-linkedin-in fw-normal" />
												</a>
											</div>
										</div>
									</div>
									<div className="bg-dark border-inner text-center p-4">
										<h4 className="text-uppercase text-primary">
											Michael jones
										</h4>
										<p className="text-white m-0">
											{' '}
											Cake Decorator
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="team-item">
									<div className="position-relative overflow-hidden">
										<img
											className="img-fluid w-100"
											src={chef3}
											alt=""
										/>
										<div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
											<div className="d-flex align-items-center justify-content-start">
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://twitter.com"
												>
													<i className="fab fa-twitter fw-normal" />
												</a>
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://facebook.com/"
												>
													<i className="fab fa-facebook-f fw-normal" />
												</a>
												<a
													className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
													href="https://linkedin.com"
												>
													<i className="fab fa-linkedin-in fw-normal" />
												</a>
											</div>
										</div>
									</div>
									<div className="bg-dark border-inner text-center p-4">
										<h4 className="text-uppercase text-primary">
											Emily Nguyen{' '}
										</h4>
										<p className="text-white m-0">
											{' '}
											Assistant Baker
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Chef
