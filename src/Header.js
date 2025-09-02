import React, { useState } from 'react'
import './style.css'
import './Bootstrap.min.scss'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { ToastContainer } from 'react-toastify'
import { auth } from './Firebase'
import logo3 from './img/logo8.png'

function Header(props) {
	const [{ basket, user }] = useStateValue()
	const [openMenu, setOpenMenu] = useState(false)
	console.log(user)
	const handleAuthentication = () => {
		setOpenMenu((current) => !current)
	}
	const handleAuthentication2 = () => {
		if (user) {
			auth.signOut()
		}
	}
	return (
		<>
			<div>
				<ToastContainer />
			</div>
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0 sticky-sm-top">
				<Link to="/" className="">
					<h1 className=" navbar-brand text-white">
						<img
							src={logo3}
							className="logo3"
							height="90px"
							width="200px"
						/>
					</h1>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav ms-auto mx-lg-auto py-0">
						<Link to="/home" className="nav-item nav-link  active">
							Home
						</Link>
						<Link to="/about" className="nav-item nav-link">
							About Us
						</Link>
						<Link to="/menu1" className="nav-item nav-link">
							Menu &amp; Pricing
						</Link>
						<Link to="/chef" className="nav-item nav-link">
							Master Chefs
						</Link>
						<div className="nav-item dropdown">
							<Link
								to="/"
								className="nav-link dropdown-toggle"
								data-bs-toggle="dropdown"
							>
								More 
							</Link>
							<div className="dropdown-menu m-0">
								<Link to="/services" className="dropdown-item">
									Our Service
								</Link>
								<Link
									to="/testimonial"
									className="dropdown-item"
								>
									Testimonial
								</Link>
							</div>
						</div>
						<Link to="/contact" className="nav-item nav-link">
							Contact Us
						</Link>
						<div>
							<Link
								to="/cart"
								className="nav-item nav-link position-absolute  cart_icon"
							>
								<i
									class="bi bi-cart"
									style={{ fontSize: '32px' }}
								></i>
								<span className="option-two header-optionCount">
									<span className="cart-item">
										{basket?.length}{' '}
									</span>
								</span>
							</Link>
							<button
								className="nav-item nav-link position-relative  person_icon"
								onClick={handleAuthentication}
								style={{
									left: '160px',
									border: 'none',
									background: 'none',
								}}
							>
								<i class="bi bi-person-circle px-2 "></i>
							</button>
						</div>
					</div>
				</div>

				<div
					className={
						openMenu
							? 'sub-menu-wrap open-menu bg-img'
							: 'sub-menu-wrap bg-img'
					}
				>
					<div className="sub-menu">
						<div className="user-info">
							<i class="bi bi-person-circle  "></i>
							<h4>
								{user
									? user.email.substring(
											0,
											user.email.length - 10
									  )
									: 'Hello Guest'}{' '}
							</h4>
						</div>
						<hr></hr>

						<Link to="/cart" className="sub-menu-link">
							<i class="bi bi-basket3-fill  "></i>
							<p>View Cart</p>
							<span> &gt; </span>
						</Link>
						<Link to="/contact" className="sub-menu-link">
							<i class="bi bi-question-circle  "></i>
							<p>help & support</p>
							<span> &gt; </span>
						</Link>
						<Link
							to={!user && '/register'}
							onClick={handleAuthentication2}
							className="sub-menu-link"
						>
							<i class="bi bi-box-arrow-right  "></i>
							<p>{user ? 'Log out' : 'Log in'}</p>
							<span> &gt; </span>
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header
