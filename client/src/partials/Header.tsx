import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => (
	<header>
		<nav>
			<ul>
				<li>
					<Link to='/form/login'>Login</Link>
				</li>
				<li>
					<Link to='/form/register'>Register</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
