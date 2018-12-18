import React, { PureComponent } from 'react';
import AddUserForm from './AddUserForm';

export default class AddUserPage extends PureComponent {
	handleAddUser = (user) => {
		if (!user) {
			return 'Enter user details to create a new user';
		}
		fetch('http://localhost:3000/users', {
			method: 'POST',
			body: JSON.stringify({
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				age: user.age,
				groupId: user.groupId
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
				<AddUserForm handleAddUser={this.handleAddUser} />
			</div>
		);
	}
}
