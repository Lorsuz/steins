import React, { useState } from 'react';
import styled from 'styled-components';

type RadiosProps = {
	label: string;
	value: string;
};

type Props = {
	name?: string;
	radios?: RadiosProps[];
	placeholder?: string;
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
};

const InputField = ({
	error = '',
	name = 'name',
	placeholder = 'Selecione seu dado',
	radios = [],
	onChange
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [selectedValue, setSelectedValue] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value);
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<StyledInputField>
			<span className='label'>{placeholder}</span>
			<div className='radios'>
				{radios.map((radio: RadiosProps, index: number) => (
					<div className='radio' key={index}>
						<input
							type='radio'
							name={name}
							id={`${name}-${index}`}
							value={radio.value}
							checked={selectedValue === radio.value}
							onChange={handleInputChange}
						/>
						<label htmlFor={`${name}-${index}`}>{radio.label}</label>
					</div>
				))}
			</div>
			<span className='error-message'>{error}</span>
		</StyledInputField>
	);
};

const StyledInputField = styled.div`
	width: 90%;
	margin: 0 auto 30px;
	.label {
		margin-bottom: 10px;
		display: block;
		font-size: 1.2rem;
	}
	.radios {
		display: block;
		padding: 0 10px;

		.radio {
			display: inline-block;
			margin-right: 20px;

			input {
				margin-right: 5px;
				cursor: pointer;
			}
			label {
				font-size: 1.2rem;
				cursor: pointer;
			}
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`;

export default InputField;
