import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import register from './components/register';
import login from './components/login';
import logout from './components/logout';
import CreatePatient from './components/patient';
import ForgotPassword from './components/forgotpassword';
import Profile from './components/profile';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/register" component={register} />
				<Route path="/login" component={login} />
				<Route path="/logout" component={logout} />
				<Route path="/forgotpassword" component={ForgotPassword} />
				<Route path="/createpatient" component={CreatePatient} />
				<Route path="/profile" component={Profile} />
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();