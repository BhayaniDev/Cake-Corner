import React, { useState } from 'react'
import limg from './img/bg_1.jpg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { loadStripe } from '@stripe/stripe-js'
import { useStateValue } from './StateProvider'

function PaymentForm() {
	const [{ basket }] = useStateValue()
	const [FirstName, setFirstName] = useState('')
	const [LastName, setLastName] = useState('')
	const [address, setAddress] = useState('')
	const [mobile, setMobile] = useState('')

	const continuePayment = async (e) => {
		// Store into database
		e.preventDefault()
		if (FirstName && LastName && address && mobile) {
			await fetch(
				'https://cake-corner2-default-rtdb.firebaseio.com/Userinformation.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						FirstName,
						LastName,
						address,
						mobile,
					}),
				}
			)

			//Make payment
			const stripe = await loadStripe(
				'pk_test_51Om6XoSB7kUmlD9G1nSjXXJZkkhNhyFPjeTd2V2HmRWVQKizVy45Ob7UVwqmkhoZGLHCS2sUlxuN4cMxfvyvrdo500i2Y3hXEe'
			)

			const body = {
				products: basket,
			}
			const headers = {
				'Content-Type': 'application/json',
			}
			const response = await fetch(
				'http://localhost:7000/api/create-checkout-session',
				{
					method: 'POST',
					headers: headers,
					body: JSON.stringify(body),
				}
			)
			const session = await response.json()

			const result = stripe.redirectToCheckout({
				sessionId: session.id,
			})

			if (result.error) {
				console.log(result.error)
			}
		} else {
			toast.error('Please fill all the data')
		}
	}
	return (
		<div>
			<div className="half">
				<div
					className="bg order-1 order-md-2"
					style={{ backgroundImage: `url(${limg})` }}
				/>
				<div className="contents order-2 order-md-1">
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-5">
								<div className="form-block">
									<div className="text-center mb-5">
										<h3>Fill Your Information</h3>
										<Link
											to="/cart"
											style={{
												textDecoration: 'none',
												color: 'orange',
												borderBottom: '1px solid ',
											}}
										>
											<i class="bi bi-arrow-left-circle-fill mx-1"></i>
											Go back
										</Link>
									</div>

									<form action="#" method="post">
										<div className="form-group first">
											<label htmlFor="FirstName">
												First Name
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Your First name"
												id="firstname"
												value={FirstName}
												onChange={(e) =>
													setFirstName(e.target.value)
												}
											/>
										</div>
										<div className="form-group first">
											<label htmlFor="LastName">
												Last Name
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Your Last name"
												id="lastname"
												value={LastName}
												onChange={(e) =>
													setLastName(e.target.value)
												}
											/>
										</div>
										<div className="form-group last mb-3">
											<label htmlFor="address">
												Address
											</label>
											<textarea
												style={{ height: '75px' }}
												type="Textarea"
												className="form-control"
												placeholder="Enter Your address"
												id="address"
												value={address}
												onChange={(e) =>
													setAddress(e.target.value)
												}
											/>
										</div>
										<div className="form-group first">
											<label htmlFor="mobile">
												Mobile No.
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Your Number"
												id="mobile"
												value={mobile}
												onChange={(e) =>
													setMobile(e.target.value)
												}
											/>
										</div>

										<input
											value={'Continue To Payment'}
											type="submit"
											className="btn btn-block btn-primary"
											onClick={continuePayment}
										/>
									</form>
									<ToastContainer />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaymentForm
