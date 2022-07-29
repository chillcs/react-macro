import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Title, Button } from '../../Elements';

const Create = (props) => {
	const [name, setName] = useState('No name');
	const [unit, setUnit] = useState('ea');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [foodData, setFoodData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const createFood = () => {
		fetch('http://localhost:3001/createfood', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify({
				name: name,
				unit: unit,
				fat: fat,
				carb: carb,
				protein: protein,
			}),
		}).then(() => {
			setFoodData([
				...foodData,
				{
					name: name,
					unit: unit,
					fat: fat,
					carb: carb,
					protein: protein,
				},
			]);
		});
		setIsOpen(!isOpen);
		props.updateData();
	};

	return (
		<>
			<Wrapper>
				<Button
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{isOpen ? 'CREATE FOOD －' : 'CREATE FOOD ＋'}
				</Button>
			</Wrapper>
			{isOpen ? (
				<Container>
					<Title>ENTER FOOD INFO</Title>
					<Form>
						<Input
							type="text"
							placeholder="Name"
							onChange={(event) => {
								setName(event.target.value);
							}}
						/>
						<Input
							type="text"
							placeholder="Unit"
							onChange={(event) => {
								setUnit(event.target.value);
							}}
						/>
						<Input
							type="number"
							placeholder="Fat (g)"
							onChange={(event) => {
								setFat(event.target.value);
							}}
						/>
						<Input
							type="number"
							placeholder="Carb (g)"
							onChange={(event) => {
								setCarb(event.target.value);
							}}
						/>
						<Input
							type="number"
							placeholder="Protein (g)"
							onChange={(event) => {
								setProtein(event.target.value);
							}}
						/>
						<Submit type="submit" value="SUBMIT" onClick={createFood}></Submit>
					</Form>
				</Container>
			) : null}
		</>
	);
};

export default Create;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
`;

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: calc(100% - 20px);
	height: calc(100% - 50px - 30px);
	margin: 10px;
	background-color: var(--light);
	overflow-y: auto;
	z-index: 60;
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
