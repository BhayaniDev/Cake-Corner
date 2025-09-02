import React, { useState } from 'react'
import './style.css'
import './Bootstrap.min.scss'

function Contact(props) {
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	let name1, value1

	const postUserData = (event) => {
		name1 = event.target.name
		value1 = event.target.value

		setUserData({ ...userData, [name1]: value1 })
	}

	const submitData = async (event) => {
		event.preventDefault()
		const { name, email, subject, message } = userData

		if (name && email && subject && message) {
			const res = await fetch(
				'https://cake-corner2-default-rtdb.firebaseio.com/contactData.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name,
						email,
						subject,
						message,
					}),
				}
			)
			if (res) {
				setUserData({
					name: '',
					email: '',
					subject: '',
					message: '',
				})
				alert('Data Stored Successfully')
				console.log(userData)
			} else {
				alert('plz fill data')
			}
		} else {
			alert('plz fill data')
		}
	}

	return (
		<>
			<div>
				<div
					className="container-fluid contact position-relative px-5"
					style={{ marginTop: '90px' }}
				>
					<div className="container">
						<div className="row g-5 mb-5">
							<div className="col-lg-4 col-md-6">
								<div className="bg-primary border-inner text-center text-white p-5">
									<i className="bi bi-geo-alt fs-1 text-white" />
									<h6 className="text-uppercase my-2">
										Our Office
									</h6>
									<span>123 Street, New York, USA</span>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="bg-primary border-inner text-center text-white p-5">
									<i className="bi bi-envelope-open fs-1 text-white" />
									<h6 className="text-uppercase my-2">
										Email Us
									</h6>
									<span>info@example.com</span>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="bg-primary border-inner text-center text-white p-5">
									<i className="bi bi-phone-vibrate fs-1 text-white" />
									<h6 className="text-uppercase my-2">
										Call Us
									</h6>
									<span>+012 345 6789</span>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-6">
								<form method="POST">
									<div className="row g-3">
										<div className="col-sm-6">
											<input
												type="text"
												className="form-control bg-light border-0 px-4"
												placeholder="Your Name"
												name="name"
												style={{ height: '55px' }}
												value={userData.name}
												onChange={postUserData}
											/>
										</div>
										<div className="col-sm-6">
											<input
												type="email"
												className="form-control bg-light border-0 px-4"
												placeholder="Your Email"
												name="email"
												style={{ height: '55px' }}
												value={userData.email}
												onChange={postUserData}
											/>
										</div>
										<div className="col-sm-12">
											<input
												type="text"
												className="form-control bg-light border-0 px-4"
												placeholder="Subject"
												style={{ height: '55px' }}
												name="subject"
												value={userData.subject}
												onChange={postUserData}
											/>
										</div>
										<div className="col-sm-12">
											<textarea
												className="form-control bg-light border-0 px-4 py-3"
												rows={4}
												placeholder="Message"
												name="message"
												value={userData.message}
												onChange={postUserData}
												defaultValue={''}
											/>
										</div>
										<div className="col-sm-12">
											<button
												className="btn btn-primary border-inner w-100 py-3"
												type="submit"
												onClick={submitData}
											>
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
