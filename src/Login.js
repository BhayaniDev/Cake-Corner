import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import limg from './img/bg_1.jpg'
import {
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify'
import { TextareaAutosize } from '@mui/material'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useNavigate()

	const signIn = async (e) => {
		e.preventDefault()

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user
				if (user) {
					router('/home')
				}
			})
			.catch((error) =>
				toast.error(error.message.substr(22), {
					position: 'top-left',
				})
			)
	}
	const forgotPass = async (e) => {
		e.preventDefault()
		if (email) {
			sendPasswordResetEmail(auth, email).then(
				toast.success('Check your  ' + email + '  mailbox ', {
					position: 'top-left',
				})
			)
		} else {
			toast.error('please fill the email field', {
				position: 'top-left',
			})
		}
	}

	return (
		<>
			<body>
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
											<h3>
												Login to{' '}
												<strong>Cake corner</strong>
											</h3>
										</div>
										<form>
											<div className="form-group first">
												<label htmlFor="username">
													E-mail
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
											<div className="form-group last mb-3">
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
														setPassword(
															e.target.value
														)
													}
												/>
											</div>
											<div className="d-sm-flex mb-5 align-items-center">
												<label className="control control--checkbox mb-3 mb-sm-0">
													<span className="caption">
														Remember me
													</span>
													<input
														type="checkbox"
														defaultChecked="checked"
													/>
													<div className="control__indicator"></div>
												</label>
												<span className="ml-auto">
													<a
														href="/"
														className="forgot-pass"
														onClick={forgotPass}
													>
														Forgot Password
													</a>
												</span>
											</div>
											<input
												value={'Log in'}
												type="submit"
												className="btn btn-block btn-primary"
												onClick={signIn}
											/>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
	)
}

export default Login
