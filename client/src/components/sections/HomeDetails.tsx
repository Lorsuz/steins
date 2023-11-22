import React from 'react';
import styled from 'styled-components';

const HomeDetails = (): JSX.Element => (
	<StyledHomeDetails>
		<h1>Sobre a Escola</h1>
		<ul>
			<li>
				<h2>64</h2>
				<h3>Anos</h3>
			</li>
			<li>
				<h2>150K</h2>
				<h3>Sócios</h3>
			</li>
			<li>
				<h2>15</h2>
				<h3>Troféus</h3>
			</li>
			<li>
				<h2>10+</h2>
				<h3>Patrocínios</h3>
			</li>
		</ul>
	</StyledHomeDetails>
);

const StyledHomeDetails = styled.section`
	margin-bottom: 50px;

	h1 {
		color: var(--color-primary);
		text-align: center;
		font-size: 2.3rem;
		margin-bottom: 20px;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		align-items: center;
		gap: 50px 100px;
		max-width: 2000px;

		li {
			grid-column: 1fr;

			h2 {
				font-size: 5rem;
				color: var(--color-text);
				text-align: center;
				font-family: Playpen Sans;
			}

			h3 {
				color: var(--color-text-soft);
				text-align: center;
				font-family: Playpen Sans;
			}
		}
	}
`;

export default HomeDetails;
