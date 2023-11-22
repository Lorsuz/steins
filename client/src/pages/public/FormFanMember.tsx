import React from 'react';
import InputField from '../../components/shared/InputField';
import InputSelectField from '../../components/shared/InputSelectField';
import InputRadioField from '../../components/shared/InputRadioField';

import styled from 'styled-components';

const FormFanMember = (): React.FunctionComponentElement<JSX.Element> => {
	console.log('FormFanMember');

	return (
		<StyledFormFanMember>
			<form>
				<fieldset>
					<legend>Dados Pessoais</legend>

					<InputField name='name' label='Nome' placeholder='Digite seu nome' />
					<InputField name='birth' label='Data de Nascimento' placeholder='Digite sua data de nascimento' />
					<InputField name='cpf' label='CPF' placeholder='Digite seu CPF' />
				</fieldset>
				<fieldset>
					<legend>Dados de Contato</legend>
					<InputField name='email' label='Email' placeholder='Digite seu email' type='email' />
					<InputField name='tell' label='Telefone' placeholder='+55 (00) 0 0000-0000' type='tell' />
				</fieldset>
				<fieldset>
					<legend>Endereço</legend>
					<InputField name='country' label='País' placeholder='Digite o nome do seu país' />
					<InputSelectField
						name='state'
						label='Estado'
						placeholder='Selecione seu estado'
						options={[
							'Acre',
							'Alagoas',
							'Amapá',
							'Amazonas',
							'Bahia',
							'Ceará',
							'Distrito Federal',
							'Espírito Santo',
							'Goiás',
							'Maranhão',
							'Mato Grosso',
							'Mato Grosso do Sul',
							'Minas Gerais',
							'Pará',
							'Paraíba',
							'Paraná',
							'Pernambuco',
							'Piauí',
							'Rio de Janeiro',
							'Rio Grande do Norte',
							'Rio Grande do Sul',
							'Rondônia',
							'Roraima',
							'Santa Catarina',
							'São Paulo',
							'Sergipe',
							'Tocantins'
						]}
					/>
					<InputField name='city' label='Cidade' placeholder='Digite o nome da cidade' />
					<InputField name='neighborhood' label='Bairro' placeholder='Digite o nome do bairro' />
					<InputField name='street' label='Logradouro' placeholder='Digite seu logradouro' />
					<InputField name='number' label='Número' placeholder='Digite o numero de residência' />
					<InputField name='complement' label='Complement0' placeholder='Ex. Apt. 302' />
					<InputField name='cep' label='CEP' placeholder='Digite seu CEP' />
				</fieldset>
				<fieldset>
					<legend>Perfil</legend>
					<InputField name='height' label='Altura' placeholder='Digite sua altura' />
					<InputField name='weight' label='Peso' placeholder='Digite seu peso' />
					<InputSelectField
						name='mannequin'
						label='Manequim'
						placeholder='Selecione seu manequim'
						options={['PP', 'P', 'M', 'G', 'GG', 'XXG']}
					/>
				</fieldset>
				<fieldset>
					<legend>Sobre Você</legend>
					<InputRadioField
						name='experience'
						placeholder='Experiência em desfiles?'
						radios={[
							{
								value: 'yes',
								label: 'Sim'
							},
							{
								value: 'no',
								label: 'Não'
							}
						]}
					/>
					<InputRadioField
						name='fanMember'
						placeholder='É sócio Torcedor??'
						radios={[
							{
								value: 'yes',
								label: 'Sim'
							},
							{
								value: 'no',
								label: 'Não'
							}
						]}
					/>
				</fieldset>
			</form>
		</StyledFormFanMember>
	);
};

const StyledFormFanMember = styled.main`
	margin-top: 100px;
	display: flex;
	justify-content: center;

	form {
		width: 50%;
		fieldset {
			border: 1px solid #ccc;
			border-radius: 10px;
			margin-bottom: 50px;
			padding-bottom: 20px;

			legend {
				font-size: 30px;
				font-weight: bold;
				margin: 0 0 20px 25px;
				padding: 0 10px;
			}
		}
	}
`;

export default FormFanMember;
