import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Menu1 from './Menu1'
import Chef from './Chef'
import Services from './Services'
import Contact from './Contact'
import Testimonial from './Testimonial'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TopBar from './TopBar'
import './style.css'
import './Bootstrap.min.scss'
import Offer from './Offer'
import Facts from './Facts'
import Cart from './Cart'
import ScrollToTop from './ScrollToTop'
import Login from './Login'
import Register from './Register'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase'
import PaymentForm from './PaymentForm'
import Success from './success'
import Cancel from './cancel'
// import UserProfile from './UserProfile'

function App() {
	const [, dispatch] = useStateValue()
	//will only run once when app component loads...
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//the user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				})
			} else {
				//the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				})
			}
		})
	}, [])

	const [changeName] = useState(' Cake Corner')
	return (
		<>
			<div className="App">
				<Router>
					<ScrollToTop />
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Header name={changeName} />
									<Home name={changeName} />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/home"
							element={
								<>
									<Header name={changeName} />
									<Home name={changeName} />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/about"
							element={
								<>
									<Header name={changeName} />
									<About name={changeName} />
									<Facts />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/menu1"
							element={
								<>
									<Header name={changeName} />

									<Menu1 name={changeName} />
									<Offer />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/chef"
							element={
								<>
									<Header name={changeName} />

									<Chef name={changeName} />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/services"
							element={
								<>
									<Header name={changeName} />
									<TopBar title="Our Services " />
									<Services name={changeName} />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/testimonial"
							element={
								<>
									<Header name={changeName} />
									<TopBar title="Testimonial " />
									<Testimonial name={changeName} />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/contact"
							element={
								<>
									<Header name={changeName} />
									<TopBar title="contact us " />
									<Contact name={changeName} />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route
							path="/cart"
							element={
								<>
									<Header name={changeName} />
									<TopBar title="Shopping Cart  " />
									<Cart />
									<Footer name={changeName} />
								</>
							}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/paymentForm" element={<PaymentForm />} />
						<Route path="/success" element={<Success />} />
						<Route path="/cancel" element={<Cancel />} />
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App
