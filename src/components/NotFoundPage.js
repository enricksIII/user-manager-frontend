import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div className="container">
		<div className="row">
			<div className="col-md-9 justify-content-around">
				<h1 className="text-warning">
					!404 || This Page Does Not Exist - <Link to="/">Go Home</Link>
				</h1>
			</div>
		</div>
	</div>
);

export default NotFoundPage;
