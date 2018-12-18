import React, { PureComponent } from 'react';
import AddGroupForm from './AddGroupForm';

export default class AddGroupPage extends PureComponent {
	handleAddGroup = (group) => {
		if (!group) {
			return 'Enter group details to create a new group';
		}
		fetch('http://localhost:3000/groups', {
			method: 'POST',
			body: JSON.stringify({
				id: group.id,
				name: group.name,
				description: group.description
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		})
			.then(() => this.props.history.push('/'))
			.catch((e) => console.log(e));
	};
	render() {
		return (
			<div>
				<AddGroupForm handleAddGroup={this.handleAddGroup} />
			</div>
		);
	}
}
