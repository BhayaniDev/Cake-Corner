import React, { useEffect, useState } from 'react'
import './style.css'
import './Bootstrap.min.scss'
import Product from './Product'
import { rdb } from './Firebase.js'
import { onValue, ref } from 'firebase/database'

function Menu1(props) {
	const [wedData, setWedData] = useState('')
	const [cusData, setCusData] = useState('')
	const [bdayData, setBdayData] = useState('')

	useEffect(() => {
		const starCountRef = ref(rdb, 'Products/')
		onValue(
			starCountRef,
			(snapShot) => {
				const data = snapShot.val()
				const newPosts = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}))

				let wedList = []
				newPosts.forEach((doc) => {
					if (doc.category === 'wedding') {
						wedList.push(doc)
					}
				})
				setWedData(wedList)

				let cusList = []
				newPosts.forEach((doc) => {
					if (doc.category === 'anniversary') {
						cusList.push(doc)
					}
				})
				setCusData(cusList)

				let bdayList = []
				newPosts.forEach((doc) => {
					if (doc.category === 'birthday') {
						bdayList.push(doc)
					}
				})
				setBdayData(bdayList)
			},
			[]
		)
	}, [])
	return (
		<>
			<div className="container-fluid about py-5">
				<div className="container">
					<div
						className="section-title position-relative text-center mx-auto mb-5 pb-3"
						style={{ maxWidth: '600px' }}
					>
						<h2 className="text-primary font-secondary">
							Menu &amp; Pricing
						</h2>
						<h1 className="display-4 text-uppercase">
							Explore Our Cakes
						</h1>
					</div>
					<div className="tab-class text-center">
						<ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
							<li className="nav-item">
								<a
									className="nav-link text-white active"
									data-bs-toggle="pill"
									href="#tab-1"
								>
									Birthday
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white"
									data-bs-toggle="pill"
									href="#tab-2"
								>
									Wedding
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white"
									data-bs-toggle="pill"
									href="#tab-3"
								>
									Anniversary
								</a>
							</li>
						</ul>

						<div className="tab-content">
							<div
								id="tab-1"
								className="tab-pane fade show p-0 active"
							>
								<div className="menu-row">
									{bdayData &&
										bdayData.map &&
										bdayData.map((item) => (
											<Product
												id={item.id}
												title={item.title}
												image={item.img}
												price={item.price}
												rating={5}
												quantity={1}
											/>
										))}
								</div>
							</div>
							<div
								id="tab-2"
								className="tab-pane fade show p-0 menu-main"
							>
								<div className="menu-row ">
									{wedData &&
										wedData.map &&
										wedData.map((item) => (
											<Product
												id={item.id}
												title={item.title}
												image={item.img}
												price={item.price}
												rating={5}
												quantity={1}
											/>
										))}
								</div>
							</div>
							<div id="tab-3" className="tab-pane fade show p-0">
								<div className="menu-row">
									{cusData &&
										cusData.map &&
										cusData.map((item) => (
											<Product
												id={item.id}
												title={item.title}
												image={item.img}
												price={item.price}
												rating={5}
												quantity={1}
											/>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu1
