import React from 'react'
import './style.css'
import './Bootstrap.min.scss'
import test1 from './img/testimonial-1.jpg'
import test2 from './img/testimonial-2.jpg'
import test3 from './img/testimonial-3.jpg'
import test4 from './img/testimonial-4.jpg'

function Testimonial(props) {
	return (
		<>
			<div
				id="carouselExampleCaptions"
				className="carousel slide  bg-img "
				style={{
					marginTop: '100px',
					backgroundColor: 'gray',
					height: '250px',
				}}
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={0}
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={1}
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={2}
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner ">
					<div className="carousel-item active  slider-element">
						<img
							src={test1}
							className="d-block position-relative test-img"
							alt="..."
						/>
						<div className="carousel-caption d-md-block test-desc">
							<h5>Sarah Say's</h5>
							<p>
								"Cake Corner exceeded my expectations! <br></br>
								Fresh ingredients, exquisite design, and
								fantastic customer service.""
							</p>
						</div>
					</div>
					<div className="carousel-item slider-element">
						<img
							src={test2}
							className="d-block  h-100px w-100px  position-relative test-img"
							alt="..."
						/>
						<div className="carousel-caption  d-md-block test-desc">
							<h5>Mark Say's</h5>
							<p>
								"Delicious flavors, timely delivery, and
								impeccable presentation! <br></br>
								Highly recommend Cake Corner."
							</p>
						</div>
					</div>
					<div className="carousel-item slider-element">
						<img
							src={test3}
							className="d-block  h-100px w-100px  position-relative test-img"
							alt="..."
						/>
						<div className="carousel-caption  d-md-block test-desc">
							<h5>Victor say's</h5>
							<p>
								"Impressed by Cake Corner's diverse menu,
								seamless ordering process,<br></br> and
								scrumptious cakes. A delightful experience!
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	)
}

export default Testimonial
