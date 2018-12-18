import React from 'react';
import User from './User';

const Users = (props) => (
	<div>
		{props.users.map((user) => {
			return (
				<User
					key={user.id}
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
