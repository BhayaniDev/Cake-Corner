import React from 'react'
import './style.css'
import './Bootstrap.min.scss'
import About from './About'
import Facts from './Facts'
import Menu1 from './Menu1'
import Services from './Services'
import Chef from './Chef'
import Offer from './Offer'
import Testimonial from './Testimonial'
import { Link } from 'react-router-dom'

function Home(props) {
	return (
		<>
			<div>
				<div
					className="container-fluid bg-primary py-5 mb-5 hero-header"
					id="top"
				>
					<div className="container py-5">
						<div className="row justify-content-start">
							<div className="col-lg-8 text-center text-lg-start home-text">
								<h1 className="font-secondary text-primary mb-4">
									Super Crispy
								</h1>
								<h1 className="display-1 text-uppercase text-white mb-4">
									{props.name}
								</h1>
								<h1 className="text-uppercase text-white">
									The Best Cake In India
								</h1>
								<div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
									<Link
										to="/services"
										className="btn btn-primary border-inner py-3 px-5 me-5"
									>
										Read More
									</Link>
									<button
										type="button"
										className="btn-play"
										data-bs-toggle="modal"
										src="https://www.youtube.com/embed/ybXulmeilFM?si=NpWTDcq7DF1lC1ru"
										data-bs-target="#videoModal"
									>
										<span />
									</button>
									<h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
										Play Video
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="modal fade"
					id="videoModal"
					tabIndex={-1}
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content rounded-0">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalLabel"
								>
									Youtube Video
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								{/* 16:9 aspect ratio */}
								<div className="ratio ratio-16x9">
									<iframe
										width="560"
										height="315"
										src="https://www.youtube.com/embed/HTXB6flODww?si=NIeDFzPFrzZLxGqU"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerpolicy="strict-origin-when-cross-origin"
										allowfullscreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>

				<About name={props.name} />

				<Facts />

				<Menu1 name={props.name} />

				<Services name={props.name} />

				<Chef name={props.name} />

				<Offer />

				<Testimonial name={props.name} />

				<a
					href="#top"
					class="btn btn-primary border-inner py-3 fs-5 back-to-top"
				>
					<i class="bi bi-arrow-up"></i>
				</a>
			</div>
		</>
	)
}

export default Home
