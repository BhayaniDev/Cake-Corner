import React, { useState } from 'react'
import limg from './img/bg_1.jpg'
import { Link } from 'react-router-dom'
import { auth, db } from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Register() {
	const [name, setname] = useState('')
	const [userName, setuserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useNavigate()

	const registerUser = async (e) => {
		e.preventDefault()
		//it create new user
		if (name && userName && email && password) {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user

					fetch(
						'https://cake-corner2-default-rtdb.firebaseio.com/Users.json',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								// uid: res.user.uid,
								name,
								userName,
								email,
								password,
							}),
						}
					)

					if (user) {
						router('/')
					}
				})
				.catch((error) =>
					toast.error(error.message, {
						position: 'top-left',
					})
				)
		} else {
			toast.error('Please Fill All Data', {
				position: 'top-left',
			})
		}
	}
	return (
		<>
			<ToastContainer />
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
										<h3>Register</h3>
									</div>
									<form action="#" method="post">
										<div className="form-group first">
											<label htmlFor="name">
												Your Name
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter Your First Name"
												id="name"
												value={name}
												onChange={(e) =>
													setname(e.target.value)
												}
											/>
										</div>
										<div className="form-group first">
											<label htmlFor="userName">
												User Name
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Enter Your Last Name"
												id="userName"
												value={userName}
												onChange={(e) =>
													setuserName(e.target.value)
												}
											/>
										</div>

										<div className="form-group first">
											<label htmlFor="username">
												Email Address
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="your-email@gmail.com"
												id="username"
												value={email}
												onChange={(e) =>
													setEmail(e.target.value)
												}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="password">
												Password
											</label>
											<input
												type="password"
												className="form-control"
												placeholder="Your Password"
												id="password"
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
										</div>

										<div className="d-sm-flex mb-5 align-items-center">
											<label className="control control--checkbox mb-3 mb-sm-0">
												<span className="caption">
													Agree our{' '}
													<a href="/register">
														Terms and Conditions
													</a>
												</span>
												<input
													type="checkbox"
													defaultChecked="checked"
												/>
												<div className="control__indicator" />
											</label>
											<span className="ml-auto">
												<Link
													to="/login"
													className="forgot-pass"
												>
													Have an account? Login
												</Link>
											</span>
										</div>
										<input
											value={'Register'}
											type="submit"
											className="btn btn-block btn-primary"
											onClick={registerUser}
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register
