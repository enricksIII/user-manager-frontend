import React, { PureComponent } from 'react';

export default class AddGroupForm extends PureComponent {
	state = {
		error: undefined
	};

	handleAddGroup = (e) => {
		e.preventDefault();
		const group = {};
		const id = e.target.elements.id.value.trim();
		const name = e.target.elements.name.value.trim();
		const description = e.target.elements.description.value.trim();

		group.id = id;
		group.name = name;
		group.description = description;

		const error = this.props.handleAddGroup(group);
		this.setState(() => ({ error }));
	};
	render() {
		return (
			<div className="container">
				<div id="groupModal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header container justify-content-around text-primary">
								<h2>ADD GROUP</h2>
							</div>
							<div className="modal-body">
								<form onSubmit={this.handleAddGroup}>
									<div className="form-group">
										<input
											type="number"
											placeholder="ID"
											className="form-control form-control-lg"
											name="id"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											placeholder="Name"
											className="form-control form-control-lg"
											name="name"
											required
										/>
									</div>
									<div className="form-group">
										<textarea
											type="text"
											placeholder="Description"
											className="form-control form-control-lg"
											name="description"
											required
										/>
									</div>
									<div className="form-group">
										<input type="submit" className="btn btn-primary btn-lg btn-block" value="Add" />
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
