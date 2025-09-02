export const initialState = {
	basket: [],
	user: null,
}

export const getBasketTotal = (basket) =>
	basket?.reduce((initialVal, item) => {
		let { price, quantity } = item

		initialVal = initialVal + price * quantity
		return initialVal
	}, 0)

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			let existingProduct = state.basket.find(
				(curItem) => curItem.id === action.item.id
			)

			if (existingProduct) {
				let updatedCart = state.basket.map((curItem) => {
					if (curItem.id === action.item.id) {
						let newqty = curItem.quantity + action.item.quantity
						return {
							...curItem,
							quantity: newqty,
						}
					} else {
						return curItem
					}
				})
				return {
					...state,
					basket: updatedCart,
				}
			}

			return {
				...state,
				basket: [...state.basket, action.item],
			}

		case 'INCREASE_ITEM':
			let existingProduct2 = state.basket.find(
				(curItem) => curItem.id === action.item.id
			)

			if (existingProduct2) {
				let updatedCart = state.basket.map((curItem) => {
					if (curItem.id === action.item.id) {
						let newqty = curItem.quantity + 1
						return {
							...curItem,
							quantity: newqty,
						}
					} else {
						return curItem
					}
				})
				return {
					...state,
					basket: updatedCart,
				}
			}

			return {
				...state,
				basket: [...state.basket, action.item],
			}

		case 'DECREASE_ITEM':
			let existingProduct3 = state.basket.find(
				(curItem) => curItem.id === action.item.id
			)

			if (existingProduct3) {
				let updatedCart = state.basket.map((curItem) => {
					if (curItem.id === action.item.id) {
						let newqty = curItem.quantity - 1
						return {
							...curItem,
							quantity: newqty,
						}
					} else {
						return curItem
					}
				})
				return {
					...state,
					basket: updatedCart,
				}
			}

			return {
				...state,
				basket: [...state.basket, action.item],
			}

		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			)
			let newBasket = [...state.basket]

			if (index >= 0) {
				newBasket.splice(index, 1)
			} else {
				console.warn(
					`Can't remove product(id:${action.id}) as its not in basket!`
				)
			}
			return {
				...state,
				basket: newBasket,
			}

		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}

		default:
			return state
	}
}

export default reducer
