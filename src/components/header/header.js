import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../../logo.svg'
import AppBar from '@material-ui/core/AppBar/AppBar'
import SimpleMenu from './../menu/menu'

const Header = (options) => {

	return (
		<React.Fragment>
			<AppBar position="relative">
				<Toolbar>
					<SimpleMenu />
					<img style={{ width: '35px' }} src={logo} className="App-logo" alt="logo"/>
					<Typography variant="h6" color="inherit" noWrap>
						MapBoxApplication
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)
}

Header.propTypes = {
	classes: PropTypes.object,
}


export default Header
