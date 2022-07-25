import React from 'react';
import { useState, useEffect } from 'react';
import { Page } from '../../Reusable';
import {
	Column,
	Headings,
	Heading,
	Row,
	Cell,
	Delete,
	Btn,
	Form,
	Input,
	Submit,
} from './Elements';

const Food = () => {
	const [name, setName] = useState('No name');
	const [unit, setUnit] = useState('ea');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const [foodData, setFoodData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/fooddata')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, []);

	const addFood = () => {
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
		toggle();
	};

	const deleteFood = (id) => {
		fetch(`http://localhost:3001/deletefood/${id}`, {
			method: 'DELETE',
		}).then(() => {
			setFoodData(
				foodData.filter((food) => {
					return food.id !== id;
				})
			);
		});
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Page>
				<Column>
					<Headings>
						<Heading style={{ width: '30%' }}>Name</Heading>
						<Heading style={{ width: '20%' }}>Unit</Heading>
						<Heading style={{ width: '15%' }}>Fat</Heading>
						<Heading style={{ width: '15%' }}>Carb</Heading>
						<Heading style={{ width: '15%' }}>Protein</Heading>
					</Headings>
					{foodData.map((food, index) => {
						return (
							<Row key={index}>
								<Cell style={{ width: '30%' }}>{food.name}</Cell>
								<Cell style={{ width: '20%' }}>{food.unit}</Cell>
								<Cell style={{ width: '15%' }}>{food.fat} g</Cell>
								<Cell style={{ width: '15%' }}>{food.carb} g</Cell>
								<Cell style={{ width: '15%' }}>{food.protein} g</Cell>
								<Delete
									onClick={() => {
										deleteFood(food.id);
									}}
								>
									X
								</Delete>
							</Row>
						);
					})}
				</Column>
				<Btn onClick={toggle}>Create a new food</Btn>
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
						<Submit type="submit" value="Add food" onClick={addFood}></Submit>
					</Form>
				) : null}
			</Page>
		</>
	);
};

export default Food;
