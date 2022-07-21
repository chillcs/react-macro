import React from 'react';
import { useState, useEffect } from 'react';
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
	Gap,
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
	const [openList, setOpenList] = useState(false);
	const [activeFood, setActiveFood] = useState(-1);

	const [foodList, setFoodList] = useState([]);
	useEffect(() => {
		const getFood = () => {
			Axios.get('http://localhost:3001/food').then((response) => {
				setFoodList(response.data);
			});
		};
		getFood();
	}, []);

	const [logList, setLogList] = useState([]);
	useEffect(() => {
		const getFoodLog = () => {
			Axios.get('http://localhost:3001/foodlog').then((response) => {
				setLogList(response.data);
			});
		};
		getFoodLog();
	}, []);

	const [fats, setFats] = useState([]);
	useEffect(() => {
		const getFats = () => {
			Axios.get('http://localhost:3001/fatsum').then((response) => {
				setFats(response.data);
			});
		};
		getFats();
	}, []);

	const [carbs, setCarbs] = useState([]);
	useEffect(() => {
		const getCarbs = () => {
			Axios.get('http://localhost:3001/carbsum').then((response) => {
				setCarbs(response.data);
			});
		};
		getCarbs();
	}, []);

	const [proteins, setProteins] = useState([]);
	useEffect(() => {
		const getProteins = () => {
			Axios.get('http://localhost:3001/proteinsum').then((response) => {
				setProteins(response.data);
			});
		};
		getProteins();
	}, []);

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
						{fats.map((fat, index) => {
							const FAT_SUM = Object.values(fat)[0];
							return (
								<GraphItem key={index}>
									<Bar style={{ height: `${FAT_SUM}px` }}>{FAT_SUM}g</Bar>
									<Title>Fat</Title>
								</GraphItem>
							);
						})}
						{carbs.map((carb, index) => {
							const CARB_SUM = Object.values(carb)[0];
							return (
								<GraphItem key={index}>
									<Bar style={{ height: `${CARB_SUM}px` }}>{CARB_SUM}g</Bar>
									<Title>Carb</Title>
								</GraphItem>
							);
						})}
						{proteins.map((protein, index) => {
							const PROTEIN_SUM = Object.values(protein)[0];
							return (
								<GraphItem key={index}>
									<Bar style={{ height: `${PROTEIN_SUM}px` }}>
										{PROTEIN_SUM}g
									</Bar>
									<Title>Protein</Title>
								</GraphItem>
							);
						})}
					</Graph>
				</Section>
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
						{logList.map((log, index) => {
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
											const removeFood = (id) => {
												Axios.delete(`http://localhost:3001/remove/${id}`).then(
													(response) => {
														setLogList(
															logList.filter((log) => {
																return log.id !== id;
															})
														);
													}
												);
											};
											removeFood(log.id);
											window.location.reload(false);
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
							{foodList.map((food, index) => {
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
															setActiveFood((activeFood) => (activeFood = -1));
															window.location.reload(false);
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
