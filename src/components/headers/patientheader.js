import React from 'react';
import './patientheader.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

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
	markeet: {
		spacing: [0, 2, 3, 5, 8],

	},
}));

function PatientHeader() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="transparent"
				elevation={0}
				className={classes.appBar}
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
							underline="none"
							color="textPrimary"
							className="naav-home"
						>
							Home
						</Link>
					</Typography>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						id="vvlogout"
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

export default PatientHeader;