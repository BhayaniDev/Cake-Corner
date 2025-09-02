import React, { useEffect, useState } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Subtotal() {
	let qty
	const [temp, setTemp] = useState('')
	const [{ basket, user }] = useStateValue()
	basket.map((item) => {
		qty = item.quantity
	})
	useEffect(() => {
		if (user && basket.length !== 0) {
			setTemp('/paymentForm')
		} else if (!user && basket.length !== 0) {
			setTemp('/register')
		}
	})
	const setCondition = () => {
		if (basket.length === 0) {
			toast.error('please Add Product', {
				position: 'top-left',
			})
		}
	}
	return (
		<div>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
									Total Item :{' '}
									<strong>{basket.length}</strong>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center px-0">
									Shipping
									<span>Gratis</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
									<div>
										<strong>Total amount</strong>
										<strong>
											<p className="mb-0">
												(including VAT)
											</p>
										</strong>
									</div>
									<span>{value}</span>
								</li>
							</ul>
							<Link to={temp} onClick={setCondition}>
								<button
									type="button"
									className="btn btn-primary btn-lg btn-block"
								>
									Continue to Payment
								</button>
							</Link>
						</div>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'₹  '}
			/>
		</div>
	)
}

export default Subtotal
