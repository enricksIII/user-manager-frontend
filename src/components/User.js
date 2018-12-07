import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => (
	<div className="container my-5 bg-light">
		<Link to={`/userDetails/${props.id}`}>
			<h2>
				{props.firstName} {props.lastName}
			</h2>
		</Link>
		<p>{props.email}</p>
		<p>{props.age} years</p>
	</div>
);

export default User;
