import React from 'react';
import styled from 'styled-components';

const HomeSponsors = (): JSX.Element => (
	<StyledHomeSponsors>
		<h1>Patrocinadores e Apoiadores</h1>
		<div className='swiper'>
			<div className='swiper-wrapper'></div>
			<div className='swiper-pagination'></div>
		</div>
	</StyledHomeSponsors>
);
const StyledHomeSponsors = styled.section`
	padding: 50px 0;
	// height: 500px;
	// max-width: 1500px;
	margin: 0 auto;

	h1 {
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		font-family: Poppins, sans-serif;
		color: var(--color-primary-soft);
	}

	.swiper {
		display: block;
		max-width: 1700px;
		width: 100vw;
		.swiper-wrapper {
			height: 300px;

			.swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				border-radius: 5px;

				img {
					width: 350px;
					height: 200px;
					object-fit: scale-down;
				}
			}
		}

		// .swiper-button-prev {}

		// .swiper-button-next {}

		.swiper-pagination {
			.swiper-pagination-bullet {
				background: var(--color-primary);
			}
		}

		// .scrollbar {}
	}
`;

export default HomeSponsors;
