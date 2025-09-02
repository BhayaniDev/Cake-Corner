import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
	return (
		<>
			<div>
				<div
					className="container-fluid bg-img text-secondary"
					style={{ marginTop: '90px' }}
				>
					<div className="container">
						<div className="row gx-5">
							<div className="col-lg-4 col-md-6 mb-lg-n5">
								<div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
									<a
										href="index.html"
										className="navbar-brand"
									>
										<h1 className="m-0 text-uppercase text-white">
											<i className="fa fa-birthday-cake fs-1 text-dark me-3" />
											{props.name}
										</h1>
									</a>
									<p className="mt-3">
										"Indulge in the sweet symphony of
										flavors at The Cake Corner, where every
										bite tells a story of craftsmanship and
										passion. As your premier destination for
										delectable delights, our online cake
										shop is committed to bringing you an
										exquisite assortment of handcrafted
										confections that are perfect for every
										occasion.
									</p>
								</div>
							</div>
							<div className="col-lg-8 col-md-6 px-5">
								<div className="row gx-5">
									<div className="col-lg-4 col-md-12 pt-5 mb-5">
										<h4 className="text-primary text-uppercase mb-4">
											Get In Touch
										</h4>
										<div className="d-flex mb-2">
											<i className="bi bi-geo-alt text-primary me-2" />
											<p className="mb-0">
												123 Street, New York, USA
											</p>
										</div>
										<div className="d-flex mb-2">
											<i className="bi bi-envelope-open text-primary me-2" />
											<p className="mb-0">
												info@example.com
											</p>
										</div>
										<div className="d-flex mb-2">
											<i className="bi bi-telephone text-primary me-2" />
											<p className="mb-0">
												+012 345 67890
											</p>
										</div>
										<div className="d-flex mt-4">
											<a
												className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
												href="https://twitter.com"
											>
												<i className="fab fa-twitter fw-normal" />
											</a>
											<a
												className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
												href="https://facebook.com"
											>
												<i className="fab fa-facebook-f fw-normal" />
											</a>
											<a
												className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
												href="https://linkedin.com"
											>
												<i className="fab fa-linkedin-in fw-normal" />
											</a>
										</div>
									</div>
									<div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5 mx-5">
										<h4 className="text-primary text-uppercase mb-4">
											Quick Links
										</h4>
										<div className="d-flex flex-column justify-content-start">
											<Link
												className="text-secondary mb-2"
												to="/home"
											>
												<i className="bi bi-arrow-right text-primary me-2" />
												Home
											</Link>
											<Link
												className="text-secondary mb-2"
												to="/about"
											>
												<i className="bi bi-arrow-right text-primary me-2" />
												About Us
											</Link>
											<Link
												className="text-secondary mb-2"
												to="/services"
											>
												<i className="bi bi-arrow-right text-primary me-2" />
												Our Services
											</Link>
											<Link
												className="text-secondary mb-2"
												to="/chef"
											>
												<i className="bi bi-arrow-right text-primary me-2" />
												Meet The Team
											</Link>
											<Link
												className="text-secondary mb-2"
												to="/testimonial"
											>
												<i className="bi bi-arrow-right text-primary me-2" />
												Latest Blog
											</Link>
											<Link
												className="text-secondary"
												to="/contact"
											>
												<i className="bi bi-arrow-right text-primary me-2" />
												Contact Us
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="container-fluid text-secondary py-4"
					style={{ background: '#111111' }}
				>
					<div className="container text-center">
						<p className="mb-0">
							©{' '}
							<a className="text-white border-bottom" href="/">
								{props.name}
							</a>
							. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
