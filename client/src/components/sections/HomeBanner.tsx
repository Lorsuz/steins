import React from 'react';
import styled from 'styled-components';
const HomeBanner = (): JSX.Element => (
	<StyledHomeBanner>
		<ul className='slides'></ul>
		<button className='prev'>
			<i className='fa-solid fa-chevron-left'></i>
		</button>
		<button className='next'>
			<i className='fa-solid fa-chevron-right'></i>
		</button>
		<ul className='pagination'></ul>
	</StyledHomeBanner>
);

const StyledHomeBanner = styled.section`
	position: relative;
	height: 100vh;
	min-height: 200px;
	width: 100%;
	overflow: hidden;
	margin-bottom: 100px;

	.slides {
		width: 100%;
		height: 100%;
		position: relative;

		li {
			width: 100%;
			height: 100%;
			top: 0;
			left: 100%;
			position: absolute;

			.img {
				width: 100%;
				height: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.text {
				position: absolute;
				top: 0;
				left: 0;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: hsla(0, 0%, 0%, 0.2);
				height: 100%;
				width: 100%;

				* {
					color: var(--color-white);
				}

				h2 {
					font-size: 3rem;
					margin-bottom: 20px;
				}

				p {
					font-size: 1.5rem;
					margin-bottom: 30px;
					width: 50%;
				}

				a {
					background: var(--color-primary);
					border-radius: 10px 0;
					color: var(--color-white);
					display: inline-block;
					font-weight: bold;
					padding: 15px 50px;
					border: 3px solid var(--color-white);
					font-size: 1.5rem;
					text-transform: uppercase;

					&:hover {
						background: var(--color-primary-soft);
						border-radius: 0px 10px;
					}
				}
			}

			&.toRightOld {
				animation: toRightOld 500ms ease-in-out;
			}

			&.toRightNew {
				animation: toRightNew 500ms ease-in-out forwards;
				left: 0;
			}

			&.toLeftOld {
				animation: toLeftOld 500ms ease-in-out;
			}

			&.toLeftNew {
				animation: toLeftNew 500ms ease-in-out forwards;
				left: 0;
			}

			&.active {
				left: 0;
			}
		}
	}

	> button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 15px 15px;
		border-radius: 10px;

		&.prev {
			left: 30px;
		}

		&.next {
			right: 30px;
		}

		i {
			font-size: 3.5rem;
			color: var(--color-primary-soft);
		}
	}

	.pagination {
		position: absolute;
		bottom: 30px;
		display: flex;
		left: 50%;
		transform: translateX(-50%);

		.dot {
			width: 50px;
			height: 5px;
			margin: 0 5px;
			background: var(--color-white);
			border-radius: 10px;
			cursor: pointer;
			transition: 300ms ease-in-out;

			&.active {
				background: var(--color-primary);
				top: 0;
				left: 0;
				cursor: default;
			}
		}
	}
`;
export default HomeBanner;
