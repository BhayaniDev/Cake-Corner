import React from 'react'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase'

function UserProfile() {
	const [{ user }] = useStateValue()
	console.log(user)
	return (
		<>
			<div className="container">
				<div className="profile-container">
					<ul>
						<li>Name</li>
						<li>My item </li>
						<li>Login</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default UserProfile
