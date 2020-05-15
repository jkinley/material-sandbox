import React from 'react'
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core'


export default function NavBar() {

	return (
		<header>
			<AppBar position="static">
				<Container>
					<Toolbar >
							<Typography edge="start" variant="h5" color="inherit">
							Material SandBox
							</Typography>
					</Toolbar>
					</Container>
			</AppBar>
		</header>
	)
}
