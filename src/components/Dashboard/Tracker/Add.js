import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	Library,
	Table,
	Row,
	Cell,
	Title,
	Button,
	ButtonSm,
} from '../../Elements';

const Add = (props) => {
	const [quantity, setQuantity] = useState(0);
	const [unit, setUnit] = useState('');
	const [name, setName] = useState('');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [openList, setOpenList] = useState(false);
	const [activeFood, setActiveFood] = useState(-1);
	const [foodData, setFoodData] = useState([]);
	const [logData, setLogData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/fooddata')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, []);

	const createLog = () => {
		fetch('http://localhost:3001/createlog', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify({
				quantity: quantity,
				unit: unit,
				name: name,
				fat: fat,
				carb: carb,
				protein: protein,
			}),
		}).then(() => {
			setLogData([
				...logData,
				{
					quantity: quantity,
					unit: unit,
					name: name,
					fat: fat,
					carb: carb,
					protein: protein,
				},
			]);
		});
		setActiveFood((activeFood) => (activeFood = -1));
		props.updateData();
	};

	return (
		<>
			<Button
				onClick={() => {
					setOpenList(!openList);
				}}
			>
				{openList ? 'ADD FOOD －' : 'ADD FOOD ＋'}
			</Button>
			{openList ? (
				<Library>
					<Title>FOOD LIBRARY</Title>
					<Table>
						{foodData.map((food, index) => {
							return (
								<Wrapper key={index}>
									<Row>
										<Cell style={{ width: '35%' }}>{food.name}</Cell>
										<Cell style={{ width: '15%' }}>{food.unit}</Cell>
										<Cell style={{ width: '15%' }}>F: {food.fat} g</Cell>
										<Cell style={{ width: '15%' }}>C: {food.carb} g</Cell>
										<Cell style={{ width: '15%' }}>P: {food.protein} g</Cell>
										{activeFood < 0 ? (
											<ButtonSm
												id={index}
												onClick={(event) => {
													const target = event.currentTarget.id;
													setActiveFood((activeFood) =>
														activeFood === target ? activeFood : target
													);
													setUnit(food.unit);
													setName(food.name);
													setFat(food.fat);
													setCarb(food.carb);
													setProtein(food.protein);
												}}
											>
												＋
											</ButtonSm>
										) : (
											parseInt(activeFood) === index && (
												<ButtonSm
													id={index}
													onClick={() =>
														setActiveFood((activeFood) => (activeFood = -1))
													}
												>
													－
												</ButtonSm>
											)
										)}
										{activeFood < 0
											? null
											: parseInt(activeFood) !== index && (
													<ButtonSm
														id={index}
														onClick={(event) => {
															const target = event.currentTarget.id;
															setActiveFood((activeFood) =>
																activeFood === target ? activeFood : target
															);
															setUnit(food.unit);
															setName(food.name);
															setFat(food.fat);
															setCarb(food.carb);
															setProtein(food.protein);
														}}
													>
														＋
													</ButtonSm>
											  )}
									</Row>
									<Bottom>
										{parseInt(activeFood) === index && (
											<Form>
												<Input
													type="text"
													placeholder="QUANTITY"
													onChange={(event) => {
														setQuantity(event.target.value);
													}}
												/>
												<Submit
													type="submit"
													value="SUBMIT"
													onClick={createLog}
												></Submit>
											</Form>
										)}
									</Bottom>
								</Wrapper>
							);
						})}
					</Table>
				</Library>
			) : null}
		</>
	);
};
export default Add;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

export const Form = styled.div`
	display: flex;
	padding: 5px 5px 10px 5px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 50%;
	padding: 5px 5px;
	font-size: var(--xs);
	background: var(--light);
	border: 1px solid var(--dark);
	border-radius: 0px;
`;

export const Submit = styled.input`
	width: 50%;
	padding: 5px 5px;
	margin-left: 10px;
	font-size: var(--xs);
	background: var(--dark);
	color: var(--light);
	border: none;
	&:hover {
		cursor: pointer;
	}
`;
