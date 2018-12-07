import React from 'react';
import Group from './Group';

const Groups = (props) => (
	<div>
		{props.groups.map((group) => {
			return <Group key={group.id} name={group.name} description={group.description} id={group.id} />;
		})}
	</div>
);

export default Groups;
