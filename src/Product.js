import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Product({ id, title, price, image, rating, quantity }) {
	const [{ basket }, dispatch] = useStateValue()

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				price: price,
				image: image,
				rating: rating,
				quantity: quantity,
			},
		})

		toast.success('Product add Successfully', {
			position: 'top-left',
		})
	}

	return (
		<>
			<div className=" page-wrapper ">
				<div className="page-inner">
					<div className="row ">
						<div className="el-wrapper  shadow p-3 mb-5 bg-body-tertiary rounded">
							<div className="box-up">
								<img className="img " src={image} alt="" />
								<div className="img-info">
									<div className="info-inner">
										<span className="p-name">{title}</span>
									</div>
									<div className="product-rating a-size">
										{Array(rating)
											.fill()
											.map((_, i) => (
												<p>⭐</p>
											))}
									</div>
									<div className="a-size">
										We Hope You Like It!
									</div>
								</div>
							</div>
							<div className="box-down">
								<div className="h-bg">
									<div className="h-bg-inner" />
								</div>
								<div className="cart border-inner py-3 px-5 me-5">
									<span className="price">₹{price}</span>
									<span className="add-to-cart">
										<button
											className="txt  "
											onClick={addToBasket}
										>
											Add to cart
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Product
