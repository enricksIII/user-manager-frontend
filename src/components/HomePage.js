import React, { PureComponent } from 'react';
import Users from './Users';
import Groups from './Groups';

export default class HomePage extends PureComponent {
	constructor(props) {
		super(props);
	}

	state = {
		users: [],
		groups: [],
		userId: ''
	};

	componentDidMount() {
		fetch('http://localhost:3000/users')
			.then((res) => {
				return res.json();
			})
			.then((users) => {
				this.setState(() => ({
					users
				}));
			})
			.catch((e) => console.log(e));

		fetch('http://localhost:3000/groups')
			.then((res) => {
				return res.json();
			})
			.then((groups) => {
				this.setState(() => ({
					groups
				}));
			})
			.catch((e) => console.log(e));
	}

	handleUserSearch = (e) => {
		e.preventDefault();

		let query = e.target.value.toLowerCase();

		fetch(`http://localhost:3000/users?q=${query}`)
			.then((res) => {
				return res.json();
			})
			.then((results) => {
				this.setState(() => ({
					users: results
				}));
			})
			.catch((e) => console.log(e));
	};

	handleGroupSearch = (e) => {
		e.preventDefault();

		let query = e.target.value.toLowerCase();

		fetch(`http://localhost:3000/groups?q=${query}`)
			.then((res) => {
				return res.json();
			})
			.then((results) => {
				this.setState(() => ({
					groups: results
				}));
			})
			.catch((e) => console.log(e));
	};

	render() {
		return (
			<div className="container">
				<div>
					<form className="row form-group justify-content-around">
						<div className="col-md-4">
							<input
								type="text"
								name="users"
								placeholder="Search Users"
								className="form-control form-control-lg"
								required
								onChange={this.handleUserSearch}
							/>
						</div>
						<div className="col-md-8">
							<input
								type="text"
								name="users"
								placeholder="Search Groups"
								className="form-control form-control-lg"
								required
								onChange={this.handleGroupSearch}
							/>
						</div>
					</form>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div>
							<h1 className="text-black-50">Users</h1>
							<Users users={this.state.users} />
						</div>
					</div>
					<div className="col-md-8">
						<div>
							<h1 className="text-black-50">Groups</h1>
							<Groups groups={this.state.groups} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
