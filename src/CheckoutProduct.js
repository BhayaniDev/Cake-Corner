import React, { useState } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating, quantity }) {
	const [, dispatch] = useStateValue()
	const [qty, setqty] = useState(quantity)

	const addQty = () => {
		if (qty >= 0) {
			setqty(qty + 1)

			dispatch({
				type: 'INCREASE_ITEM',
				item: {
					id: id,
					title: title,
					price: price,
					image: image,
					rating: rating,
					quantity: quantity,
				},
			})
		}
	}

	const minQty = () => {
		if(qty <=1){
			dispatch({
				type: 'REMOVE_FROM_BASKET',
				id: id,
			})
		}
		else if(qty > 0) {
			setqty(qty - 1)

			dispatch({
				type: 'DECREASE_ITEM',
				item: {
					id: id,
					title: title,
					price: price,
					image: image,
					rating: rating,
					quantity: quantity - 1,
				},
			})
		}
		 
	}
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		})
	}
	return (
		<div className="checkoutProduct">
			<img
				src={image}
				alt="Checkoutimg"
				className="checkoutProduct-image"
			/>

			<div className="checkoutProduct-info">
				<p className="checkoutProduct-title">{title}</p>

				<p className="checkoutProduct-price">
					₹<strong>{price}</strong>
				</p>

				<div className="checkoutProduct-rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>⭐</p>
						))}
				</div>
				<div className="checkout-quantity">
					<button onClick={minQty}>
						<i class="bi bi-dash-circle-fill" />
					</button>
					<p>
						<strong>{quantity}</strong>
					</p>
					<button onClick={addQty}>
						<i class="bi bi-plus-circle-fill" />{' '}
					</button>
				</div>

				<button onClick={removeFromBasket}>Remove From Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
