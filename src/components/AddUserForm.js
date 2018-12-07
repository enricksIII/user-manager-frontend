import React from 'react';

export default class AddUserForm extends React.Component {
	state = {
		error: undefined,
		groups: []
	};

	componentDidMount() {
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

	handleAddUser = (e) => {
		e.preventDefault();
		const user = {};
		const firstName = e.target.elements.firstName.value.trim();
		const lastName = e.target.elements.lastName.value.trim();
		const email = e.target.elements.email.value.trim();
		const age = e.target.elements.age.value.trim();
		const groupId = e.target.elements.groupId.value.trim();

		user.firstName = firstName;
		user.lastName = lastName;
		user.email = email;
		user.age = age;
		user.groupId = groupId;

		const error = this.props.handleAddUser(user);
		this.setState(() => ({ error }));
	};

	render() {
		return (
			<div className="container">
				<div id="userModal">
					<div className="modal-dialog">
						<div className="modal-content">
							{this.state.error && <p>{this.state.error}</p>}
							<div className="modal-header container justify-content-around text-primary">
								<h2>ADD USER</h2>
							</div>

							<div className="modal-body">
								<form onSubmit={this.handleAddUser}>
									<div className="form-group">
										<input
											type="text"
											placeholder="Firstname"
											className="form-control form-control-lg"
											name="firstName"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											placeholder="Lastname"
											className="form-control form-control-lg"
											name="lastName"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											placeholder="Email"
											className="form-control form-control-lg"
											name="email"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="number"
											placeholder="Age"
											className="form-control form-control-lg"
											name="age"
											required
										/>
									</div>
									<div className="form-group">
										<select
											required
											className="form-control form-control-lg"
											id="group"
											name="groupId"
										>
											<option value="">Select Group</option>
											{this.state.groups.map((group) => {
												return (
													<option key={group.id} value={group.id}>
														{group.name}
													</option>
												);
											})}
										</select>
									</div>
									<div className="form-group">
										<input type="submit" className="btn btn-primary btn-block btn-lg" value="Add" />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
