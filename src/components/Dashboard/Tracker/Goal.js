import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../Elements';

const Goal = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [fatGoal, setFatGoal] = useState('');
	const [carbGoal, setCarbGoal] = useState('');
	const [proteinGoal, setProteinGoal] = useState('');

	const postMacros = () => {
		localStorage.setItem('fatGoal', JSON.stringify(fatGoal));
		localStorage.setItem('carbGoal', JSON.stringify(carbGoal));
		localStorage.setItem('proteinGoal', JSON.stringify(proteinGoal));
		setIsOpen(!isOpen);
		props.updateData();
	};

	return (
		<>
			<Wrapper>
				<ButtonG
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{isOpen ? 'GOAL －' : 'GOAL ＋'}
				</ButtonG>
			</Wrapper>
			{isOpen ? (
				<Container>
					<Title>ENTER DAILY MACRO GOALS</Title>
					<Form>
						<Input
							type="text"
							placeholder="Fat (g)"
							onChange={(event) => {
								setFatGoal(event.target.value);
							}}
						/>
						<Input
							type="text"
							placeholder="Carb (g)"
							onChange={(event) => {
								setCarbGoal(event.target.value);
							}}
						/>
						<Input
							type="text"
							placeholder="Protein (g)"
							onChange={(event) => {
								setProteinGoal(event.target.value);
							}}
						/>
						<Submit type="submit" value="SUBMIT" onClick={postMacros}></Submit>
					</Form>
				</Container>
			) : null}
		</>
	);
};

export default Goal;

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 25px;
	margin-bottom: 10px;
	z-index: 40;
`;

export const ButtonG = styled.div`
	display: flex;
	justify-content: center;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: calc(100%);
	height: calc(100%);
	background-color: var(--light);
	z-index: 30;
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin: 5px 0;
	font-size: var(--p);
	background: var(--light);
	border: 1px solid var(--dark);
	border-radius: 0px;
`;

export const Submit = styled.input`
	width: 100%;
	padding: 10px;
	margin: 5px 0;
	font-size: var(--p);
	background: var(--dark);
	color: var(--light);
	border: none;
	&:hover {
		cursor: pointer;
	}
`;
