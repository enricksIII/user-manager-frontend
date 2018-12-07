import React from 'react';
import { Link } from 'react-router-dom';

const Group = (props) => (
	<div className="container my-5 bg-light">
		<Link to={`groupDetails/${props.id}`}>
			<h2>{props.name}</h2>
		</Link>
		<p>{props.description}</p>
	</div>
);

export default Group;
