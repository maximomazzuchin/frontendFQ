import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import register from './components/register/register';
import login from './components/login/login';
import logout from './components/logout';
import CreatePatient from './components/patient/patient';
import ForgotPassword from './components/forgotpassword/forgotpassword';
import EditUser from './components/edituser/edituser';

const routing = (
	<Router>
		<React.StrictMode>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/register" component={register} />
				<Route exact path="/login" component={login} />
				<Route exact path="/logout" component={logout} />
				<Route exact path="/forgotpassword" component={ForgotPassword} />
				<Route exact path="/createpatient" component={CreatePatient} />
				<Route exact path="/edituser" component={EditUser} />
			</Switch>
		</React.StrictMode>
	</Router>
);

const divRoot = document.querySelector('#root');
const root = createRoot( divRoot );

root.render(routing);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA