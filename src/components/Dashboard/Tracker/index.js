import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { Page } from '../../Reusable';
import {
	Section,
	TabList,
	Tab,
	Graph,
	GraphItem,
	Bar,
	Title,
	Btn,
	Column,
	Log,
	Cell,
	Remove,
	Headings,
	Heading,
	Row,
	Top,
	Bottom,
	BtnSm,
	Form,
	Input,
	Submit,
} from './Elements';

const Tracker = () => {
	const [quantity, setQuantity] = useState(0);
	const [unit, setUnit] = useState('');
	const [name, setName] = useState('');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [logList, setLogList] = useState([]);

	const [foodList, setFoodList] = useState([]);
	const getFood = () => {
		Axios.get('http://localhost:3001/food').then((response) => {
			setFoodList(response.data);
		});
	};
	getFood();

	const [listIsOpen, setListIsOpen] = useState(false);
	const toggleList = () => {
		setListIsOpen(!listIsOpen);
	};

	const [activeFood, setActiveFood] = useState(-1);

	function closeForm() {
		setActiveFood((activeFood) => (activeFood = -1));
	}

	const getFoodLog = () => {
		Axios.get('http://localhost:3001/foodlog').then((response) => {
			setLogList(response.data);
		});
	};
	getFoodLog();

	const removeFood = (id) => {
		Axios.delete(`http://localhost:3001/remove/${id}`).then((response) => {
			setLogList(
				logList.filter((log) => {
					return log.id !== id;
				})
			);
		});
	};

	return (
		<>
			<Page>
				<Section>
					<TabList>
						<Tab>Today</Tab>
						<Tab>Week</Tab>
						<Tab>Month</Tab>
						<Tab>Year</Tab>
					</TabList>
				</Section>
				<Section>
					<Graph>
						<GraphItem>
							<Bar style={{ height: `${30 * 2}px` }}>{30}g</Bar>
							<Title>Fat</Title>
						</GraphItem>
						<GraphItem>
							<Bar style={{ height: `${40 * 2}px` }}>{40}g</Bar>
							<Title>Carb</Title>
						</GraphItem>
						<GraphItem>
							<Bar style={{ height: `${10 * 2}px` }}>{10}g</Bar>
							<Title>Protein</Title>
						</GraphItem>
					</Graph>
				</Section>
				<Section>
					<Column>
						<Headings>
							<Heading style={{ width: '15%' }}>Qty</Heading>
							<Heading style={{ width: '15%' }}>Unit</Heading>
							<Heading style={{ width: '25%' }}>Name</Heading>
							<Heading style={{ width: '15%' }}>Fat</Heading>
							<Heading style={{ width: '15%' }}>Carb</Heading>
							<Heading style={{ width: '15%' }}>Protein</Heading>
						</Headings>
						{logList.map((log, index) => {
							return (
								<Log key={index}>
									<Cell style={{ width: '15%' }}>{log.quantity}</Cell>
									<Cell style={{ width: '15%' }}>{log.unit}</Cell>
									<Cell style={{ width: '25%' }}>{log.name}</Cell>
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
				<Btn onClick={toggleList}>Add food +</Btn>
				{listIsOpen ? (
					<Section>
						<Column>
							<Headings>
								<Heading style={{ width: '30%' }}>Name</Heading>
								<Heading style={{ width: '20%' }}>Amount</Heading>
								<Heading style={{ width: '15%' }}>Fat</Heading>
								<Heading style={{ width: '15%' }}>Carb</Heading>
								<Heading style={{ width: '15%' }}>Protein</Heading>
							</Headings>
							{foodList.map((food, index) => {
								return (
									<Row key={index}>
										<Top>
											<Cell style={{ width: '30%' }}>{food.name}</Cell>
											<Cell style={{ width: '20%' }}>
												{food.amount} {food.unit}
											</Cell>
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
													<BtnSm id={index} onClick={closeForm}>
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
														onClick={() => {
															Axios.post('http://localhost:3001/log', {
																quantity: quantity,
																unit: unit,
																name: name,
																fat: fat,
																carb: carb,
																protein: protein,
															}).then(() => {
																setLogList([
																	...logList,
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
															closeForm();
														}}
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
			</Page>
		</>
	);
};
export default Tracker;
