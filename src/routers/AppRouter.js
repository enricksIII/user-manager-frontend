import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddUserPage from '../components/AddUserPage';
import AddGroupPage from '../components/AddGroupPage';
import UserDetails from '../components/UserDetails';
import GroupDetails from '../components/GroupDetails';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/addUser" component={AddUserPage} />
				<Route path="/addGroup" component={AddGroupPage} />
				<Route path="/userDetails/:id" component={UserDetails} />
				<Route path="/groupDetails/:id" component={GroupDetails} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
