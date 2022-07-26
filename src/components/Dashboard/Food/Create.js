import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

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
			<Btn
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Create a new food +
			</Btn>
			{isOpen ? (
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
					<Submit type="submit" value="Add food" onClick={createFood}></Submit>
				</Form>
			) : null}
		</>
	);
};

export default Create;

export const Btn = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	width: 100%;
	padding: 10px;
	background: var(--light);
	font-size: var(--p);
	&:hover {
		cursor: pointer;
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 100%;
	padding: 5px 5px;
	margin: 5px 0;
	font-size: var(--p);
`;

export const Submit = styled.input`
	width: 100%;
	padding: 5px 5px;
	margin: 5px 0;
	font-size: var(--p);
	&:hover {
		cursor: pointer;
	}
`;
