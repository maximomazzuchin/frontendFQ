import React from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Navbar from 'react-bootstrap/Navbar';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `0px solid ${theme.palette.divider}`,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="transparent"
				elevation={0}
				className={`navbar-container ${classes.appBar}`}
			>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						color="inherit"
						noWrap
						className={classes.toolbarTitle}
					>
						<Link
							component={NavLink}
							to="/"
							className="nav-homee"
							underline="none"
							color="textPrimary"
						>
							Home
						</Link>
					</Typography>
					<nav>
					</nav>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						id="hmarket"
						component={NavLink}
						to="/market"
					>
						Market
					</Button>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						id="hlogout"
						component={NavLink}
						to="/logout"
					>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;