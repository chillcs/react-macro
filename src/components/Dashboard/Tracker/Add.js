import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
			<Btn
				onClick={() => {
					setOpenList(!openList);
				}}
			>
				Add food +
			</Btn>
			{openList ? (
				<Section>
					<Column>
						{foodData.map((food, index) => {
							return (
								<Row key={index}>
									<Top>
										<Cell style={{ width: '30%' }}>{food.name}</Cell>
										<Cell style={{ width: '20%' }}>{food.unit}</Cell>
										<Cell style={{ width: '15%' }}>{food.fat} g</Cell>
										<Cell style={{ width: '15%' }}>{food.carb} g</Cell>
										<Cell style={{ width: '15%' }}>{food.protein} g</Cell>
										{activeFood < 0 ? (
											<BtnSm
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
												Add
											</BtnSm>
										) : (
											parseInt(activeFood) === index && (
												<BtnSm
													id={index}
													onClick={() =>
														setActiveFood((activeFood) => (activeFood = -1))
													}
												>
													Hide
												</BtnSm>
											)
										)}
										{activeFood < 0
											? null
											: parseInt(activeFood) !== index && (
													<BtnSm
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
														Add
													</BtnSm>
											  )}
									</Top>
									<Bottom>
										{parseInt(activeFood) === index && (
											<Form>
												<Input
													type="text"
													placeholder="Quantity"
													onChange={(event) => {
														setQuantity(event.target.value);
													}}
												/>
												<Submit
													type="submit"
													value="Log food"
													onClick={createLog}
												></Submit>
											</Form>
										)}
									</Bottom>
								</Row>
							);
						})}
					</Column>
				</Section>
			) : null}
		</>
	);
};
export default Add;

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

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 10px;
	padding-bottom: 5px;
	background: var(--light);
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Top = styled.div`
	display: flex;
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid var(--medium);
	&:last-of-type {
		border-bottom: none;
	}
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	padding-left: 5px;
	font-size: var(--xs);
`;

export const BtnSm = styled.div`
	display: flex;
	justify-content: center;
	min-width: 20px;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid var(--medium);
	&:last-of-type {
		border-bottom: none;
	}
`;

export const Form = styled.div`
	display: flex;
	padding: 10px 0 10px 10px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 50%;
	padding: 5px 5px;
	margin-left: 10px;
	font-size: var(--xs);
`;

export const Submit = styled.input`
	width: 50%;
	padding: 5px 5px;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;
