import React from 'react'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import PaymentForm from './PaymentForm'

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue()

	return (
		<>
			<section className="h-100 gradient-custom">
				<div className="container py-5">
					<div className="row d-flex justify-content-center my-4">
						<div className="col-md-8" style={{ display: 'flex' }}>
							<div className="card mb-4">
								<div className="card-header py-3">
									<h5 className="mb-0">
										Cart - {basket.length} items
									</h5>
								</div>
								<div className="card-body">
									{/* Single item */}
									<div className="row">
										{basket.map((item) => (
											<CheckoutProduct
												id={item.id}
												image={item.image}
												title={item.title}
												price={item.price}
												rating={item.rating}
												quantity={item.quantity}
											/>
										))}
										{/* Single item */}
										<hr className="my-4" />
									</div>
								</div>
								<div className="card mb-4">
									<div className="card-body">
										<p>
											<strong>
												Expected shipping delivery
											</strong>
										</p>
										<p className="mb-0">
											12.5.2024 - 14.5.2024
										</p>
									</div>
								</div>
								<div className="card mb-4 mb-lg-0">
									<div className="card-body">
										<p>
											<strong>We accept</strong>
										</p>
										<img
											className="me-2"
											width="45px"
											src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
											alt="Visa"
										/>
										<img
											className="me-2"
											width="45px"
											src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
											alt="American Express"
										/>
										<img
											className="me-2"
											width="45px"
											src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
											alt="Mastercard"
										/>
									</div>
								</div>
							</div>

							<div className="col-md-4 mx-3 ">
								<div className="card mb-4">
									<div className="card-header py-3">
										<h5 className="mb-0">Summary</h5>
									</div>
									<div>
										<Subtotal />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Checkout
