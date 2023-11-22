import React from 'react';
import styled from 'styled-components';
const HomePlot = (): JSX.Element => (
	<StyledHomePlot>
		<div className='wrapper'>
			<div className='description'>
				<h2>Enredo 2024</h2>
				<h1>As bruxas estão soltas!</h1>
				<p>
					O enredo "As Bruxas Estão Soltas!" celebra o poder feminino, explorando a manifestação das energias ancestrais
					através da Deusa Terra e dos quatro elementos da criação.
				</p>
				<p>
					{' '}
					A narrativa aborda a conexão entre passado e presente, destacando as mulheres que, ao longo da história,
					detinham conhecimentos medicinais e espirituais, mas foram perseguidas sob a acusação de bruxaria.
				</p>
				<p>
					O enredo também aborda a resistência dessas mulheres e sua contínua luta contra o machismo e a intolerância,
					honrando a força do sagrado feminino e a capacidade de voar além dos limites impostos, como estrelas
					brilhantes no céu.
				</p>
				<span>Iae, gostou? Para ter acesso a nossa sinopse completa basta baixar o PDF a baixo:</span>
				<button className='custom-button'>Baixar Sinopse</button>
			</div>
			<div className='disc-cover'>
				<img src='./components/assets/images/Plot/plot-2024.jpeg' alt='Logo Enredo-2024' />
				<div className='icons'>
					<button>
						<i className='bi bi-play'></i>
					</button>
					<div className='player-bars'></div>
				</div>
			</div>
			<div className='audio'>
				<audio controls>
					<source src='./components/assets/audio/plot-song.mpeg' type='audio/mp3' />
					Seu navegador não suporta a tag de áudio.
				</audio>
			</div>
		</div>
	</StyledHomePlot>
);
const StyledHomePlot = styled.section`
	height: auto;

	.wrapper {
		.description {
			grid-column: 2/6;

			h2 {
				font-size: 2rem;
				color: var(--color-primary);
				font-family: Playpen Sans;
			}

			h1 {
				margin-bottom: 20px;
				font-size: 2.5rem;
				color: var(--color-text);
			}

			p {
				color: var(--color-text-soft);
				text-align: justify;
				margin-bottom: 10px;
			}

			span {
				margin-top: 30px;
				margin-bottom: 30px;
				display: block;
				color: var(--color-text);
			}

			button {
				display: block;
			}
		}

		.disc-cover {
			grid-column: 7/12;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			box-shadow:
				-10px -10px 10px 0 #fff,
				10px 10px 10px 0 rgba(0, 0, 0, 0.6);
			height: auto;
			overflow: hidden;
			margin: auto;
			border-radius: 6px;

			img {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				object-fit: cover;
			}

			.icons {
				align-items: center;
				background: rgba(0, 0, 0, 0.6);
				border-radius: 6px;
				display: flex;
				height: 100%;
				justify-content: center;
				left: 0;
				opacity: 0.7;
				position: absolute;
				top: 0;
				transition: 300ms;
				width: 100%;

				button {
					align-items: center;
					border-radius: 50%;
					border: 3px solid transparent;
					cursor: pointer;
					display: flex;
					height: 80px;
					justify-content: center;
					transition: 300ms;
					width: 80px;
					background: #000;

					i {
						color: white;
						font-size: 4rem;
						&.bi-play {
							margin-left: 8px;
						}
					}

					&:hover {
						border: 3px solid white;
					}
				}

				.player-bars {
					display: flex;
					position: absolute;
					bottom: 0px;

					.bar {
						margin: 0 2px;
						background: #000;
						border-radius: 10px 10px 0px 0px;
						width: 1px;
						height: 50px;
						border: 2px solid #fff;
						border-bottom: none;
						transform: translateY(45px);
					}

					@keyframes ocilation {
						from {
							transform: translateY(45px);
						}

						to {
							transform: translateY(0px);
						}
					}
				}
			}

			&:hover .icons {
				opacity: 1;
			}
		}
		.audio {
			display: block;
			grid-column: 7/12;
			padding: 50px 0;
			audio {
				width: 100%;
				&::-webkit-media-controls-start-playback-button {
					display: none !important;
				}
			}
		}
	}
`;
export default HomePlot;
