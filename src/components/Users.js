import React from 'react';
import User from './User';

const Users = (props) => (
	<div>
		{props.users.map((user, index) => {
			return (
				<User
					key={index}
					firstName={user.firstName}
					lastName={user.lastName}
					age={user.age}
					email={user.email}
					id={user.id}
				/>
			);
		})}
	</div>
);

export default Users;
