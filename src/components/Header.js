import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<nav className="navbar navbar-dark">
			<div className="container">
				<NavLink to="/" exact={true}>
					<h1 className="text-primary links">User Manager</h1>
				</NavLink>

				<div className="ml-auto">
					<NavLink to="/" className="nav-item px-2" activeClassName="is-active" exact={true}>
						Home
					</NavLink>
					<NavLink to="/addUser" className="nav-item px-2" activeClassName="is-active">
						Create User
					</NavLink>
					<NavLink to="/addGroup" className="nav-item px-2" activeClassName="is-active">
						Create Group
					</NavLink>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
