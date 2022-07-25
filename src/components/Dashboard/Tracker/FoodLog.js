import React from 'react';
import { useState, useEffect } from 'react';
import {
	Section,
	Btn,
	Column,
	Log,
	Cell,
	Remove,
	Headings,
	Heading,
	Gap,
	Row,
	Top,
	Bottom,
	BtnSm,
	Form,
	Input,
	Submit,
} from './Elements';

const FoodLog = () => {
	const [quantity, setQuantity] = useState(0);
	const [unit, setUnit] = useState('');
	const [name, setName] = useState('');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [openList, setOpenList] = useState(false);
	const [activeFood, setActiveFood] = useState(-1);

	const [foodData, setFoodData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/fooddata')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, []);

	const logFood = () => {
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
	};

	const [logData, setLogData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/logdata')
			.then((res) => res.json())
			.then((data) => {
				setLogData(data);
			});
	}, []);

	const removeFood = (id) => {
		fetch(`http://localhost:3001/deletelog/${id}`, {
			method: 'DELETE',
		}).then(() => {
			setLogData(
				logData.filter((log) => {
					return log.id !== id;
				})
			);
		});
	};

	return (
		<>
			<Section>
				<Column>
					<Headings>
						<Heading style={{ width: '20%' }}>Amount</Heading>
						<Heading style={{ width: '35%' }}>Food</Heading>
						<Heading style={{ width: '15%' }}>Fat</Heading>
						<Heading style={{ width: '15%' }}>Carb</Heading>
						<Heading style={{ width: '15%' }}>Protein</Heading>
						<Gap style={{ width: '10px' }}></Gap>
					</Headings>
					{logData.map((log, index) => {
						return (
							<Log key={index}>
								<Cell style={{ width: '5%' }}>{log.quantity}</Cell>
								<Cell style={{ width: '15%' }}>{log.unit}</Cell>
								<Cell style={{ width: '35%' }}>{log.name}</Cell>
								<Cell style={{ width: '15%' }}>{log.fat} g</Cell>
								<Cell style={{ width: '15%' }}>{log.carb} g</Cell>
								<Cell style={{ width: '15%' }}>{log.protein} g</Cell>
								<Remove
									onClick={() => {
										removeFood(log.id);
									}}
								>
									X
								</Remove>
							</Log>
						);
					})}
				</Column>
			</Section>
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
													onClick={logFood}
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
export default FoodLog;
