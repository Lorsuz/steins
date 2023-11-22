import React from 'react';
import styled from 'styled-components';

const HomeCover = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledHomeCover>
		<div className='wrapper'>
			<div className='left'>
				<div className='container'>
					<h2>Grêmio Recreativo Escola de Samba</h2>
					<h1>Acadêmicos de Santa Cruz</h1>
					<p>
						Bem-vindos! Aqui o samba é vida, a cultura é paixão e a alegria é eterna. No coração de Santa Cruz, encontre
						a felicidade em cada batida de tambor. Feliz da vida é quem tem a Santa Cruz no coração.
					</p>
					<a href='./components/pages/not-found.html'>Ir para Loja</a>
					<ul className='social-links'>
						<li>
							<a target='_blank' href='https://www.instagram.com/academicosdesantacruzrj/'>
								<i className='fa-brands fa-instagram'></i>
							</a>
						</li>
						<li>
							<a target='_blank' href='https://www.facebook.com/acadsantacruz?mibextid=LQQJ4d'>
								<i className='fa-brands fa-facebook'></i>
							</a>
						</li>
						<li>
							<a target='_blank' href='https://www.youtube.com/@academicosdesantacruz'>
								<i className='fa-brands fa-youtube'></i>
							</a>
						</li>
						<li>
							<a target='_blank' href='https://x.com/acadsantacruz?s=11'>
								<i className='fa-brands fa-x-twitter'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='right'>
				<div className='img'>
					<img src='../../assets/images/logo - gresasc.jpg' alt='Logo' />
				</div>
				<ul className='social-links'>
					<li>
						<a target='_blank' href='https://www.instagram.com/academicosdesantacruzrj/'>
							<i className='fa-brands fa-instagram'></i>
						</a>
					</li>
					<li>
						<a target='_blank' href='https://www.facebook.com/acadsantacruz?mibextid=LQQJ4d'>
							<i className='fa-brands fa-facebook'></i>
						</a>
					</li>
					<li>
						<a target='_blank' href='https://www.youtube.com/@academicosdesantacruz'>
							<i className='fa-brands fa-youtube'></i>
						</a>
					</li>
					<li>
						<a target='_blank' href='https://x.com/acadsantacruz?s=11'>
							<i className='fa-brands fa-x-twitter'></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</StyledHomeCover>
);

const StyledHomeCover = styled.section`
	height: 98dvh;
	min-height: 700px;
	max-height: 1200px;

	.wrapper > div {
		&.left {
			grid-column: 2/7;
			align-items: center;
			display: flex;
			justify-content: center;

			.container {
				h2 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 2.5rem;
				}

				h1 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 4rem;
					margin-bottom: 20px;
				}

				p {
					color: var(--color-text-soft);
					font-size: 1.1rem;
					margin-bottom: 50px;
				}

				> a {
					background: var(--color-primary-soft);
					border-radius: 10px 0;
					color: var(--color-white);
					display: inline-block;
					font-weight: bold;
					padding: 10px 50px;
					margin-bottom: 25px;

					&:hover {
						background: var(--color-primary);
						border-radius: 0px 10px;
					}
				}

				.social-links {
					gap: 25px;
					display: none;

					li {
						a {
							i {
								font-size: 2rem;

								&.fa-facebook {
									color: #3b5998;
								}

								&.fa-instagram {
									color: #e4405f;
								}

								&.fa-x-twitter {
									color: #000000;
								}

								&.fa-youtube {
									color: #cd201f;
								}
							}
						}
					}
				}
			}
		}

		&.right {
			grid-column: 8/12;

			.img {
				align-items: center;
				display: flex;
				justify-content: center;
				margin-bottom: 0px;

				img {
					width: 450px;
				}
			}

			.social-links {
				display: flex;
				justify-content: center;

				li {
					margin: 0 10px;
					position: relative;
					top: 0;

					a {
						i {
							font-size: 2.4rem;
							color: var(--color-text-soft);

							&.fa-facebook {
								color: #3b5998;
							}

							&.fa-instagram {
								color: #e4405f;
							}

							&.fa-x-twitter {
								color: #000000;
							}

							&.fa-youtube {
								color: #cd201f;
							}
						}
					}

					&:hover {
						top: -5px;

						a {
							i {
								color: var(--color-primary-soft);
							}
						}
					}
				}
			}
		}
	}
`;

export default HomeCover;
