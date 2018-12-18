import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import ProfileImage from './ProfileImage';

class UserDetails extends PureComponent {
	constructor(props) {
		super(props);
	}

	state = {
		firstName: '',
		lastName: '',
		email: '',
		age: '',
		id: '',
		image: ''
	};

	componentDidMount() {
		let userId = this.props.match.params.id;
		fetch(`http://localhost:3000/users/${userId}`)
			.then((res) => {
				return res.json();
			})
			.then((user) => {
				this.setState(() => ({
					firstName: user.firstName,
					lastName: user.lastName,
					age: user.age,
					email: user.email,
					id: user.id
				}));
			});

		fetch(`https://randomuser.me/api/`)
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				this.setState(() => ({
					image: result.results[0].picture.large
				}));
			});
	}

	handleDeleteUser(userId) {
		if (confirm('Are You Sure?')) {
			fetch(`http://localhost:3000/users/${userId}`, {
				method: 'DELETE'
			})
				.then(() => this.props.history.push('/'))
				.catch((e) => console.log(e));
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="container col-sm-3">
						<ProfileImage>
							<img src={this.state.image} />
						</ProfileImage>
					</div>
					<div className="container col-sm-9">
						<User
							firstName={this.state.firstName}
							lastName={this.state.lastName}
							age={this.state.age}
							email={this.state.email}
							id={this.state.id}
						/>
					</div>
				</div>
				<button
					onClick={(e) => {
						{
							this.handleDeleteUser(this.state.id);
						}
					}}
					className="btn btn-danger btn-lg btn-block"
				>
					Delete User
				</button>
			</div>
		);
	}
}

export default UserDetails;
