import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import User from './User';

class GroupDetails extends PureComponent {
	constructor(props) {
		super(props);
	}
	state = {
		users: [],
		error: ''
	};
	componentWillMount() {
		let groupId = this.props.match.params.id;
		fetch(`http://localhost:3000/groups/${groupId}/users`)
			.then((res) => {
				return res.json();
			})
			.then((users) => {
				this.setState(() => ({
					users
				}));
			});
	}

	handleDeleteGroup(groupId) {
		if (this.state.users.length === 0) {
			if (confirm('Are You Sure?')) {
				fetch(`http://localhost:3000/groups/${groupId}`, {
					method: 'DELETE'
				})
					.then(() => this.props.history.push('/'))
					.catch((e) => console.log(e));
			}
		} else {
			this.setState(() => ({
				error: 'There are Active members on this group'
			}));
		}
	}

	render() {
		return (
			<div className="container">
				<p className="text-danger">{this.state.error && this.state.error}</p>
				<h2 className="text-primary justify-content-around">Group Members</h2>
				{this.state.users.map((user) => {
					return (
						<div key={user.id}>
							<User
								firstName={user.firstName}
								lastName={user.lastName}
								age={user.age}
								email={user.email}
								id={user.id}
							/>
						</div>
					);
				})}
				<button
					onClick={() => {
						{
							this.handleDeleteGroup(this.props.match.params.id);
						}
					}}
					className="btn btn-danger btn-lg btn-block"
				>
					Delete Group
				</button>
			</div>
		);
	}
}

export default GroupDetails;
