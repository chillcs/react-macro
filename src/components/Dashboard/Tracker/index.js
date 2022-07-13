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
	Headings,
	Heading,
	Row,
	Top,
	Bottom,
	Cell,
	BtnSm,
	Form,
	Input,
} from './Elements';

const Tracker = () => {
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
	function openForm(event) {
		const target = event.currentTarget.id;
		setActiveFood((activeFood) =>
			activeFood === target ? activeFood : target
		);
	}
	function closeForm() {
		setActiveFood((activeFood) => (activeFood = -1));
	}

	const setQuantity = () => 0;
	const logFood = () => 0;

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
												<BtnSm id={index} onClick={openForm}>
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
														<BtnSm id={index} onClick={openForm}>
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
													<Input
														type="submit"
														value="Log food"
														onClick={logFood}
													></Input>
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
