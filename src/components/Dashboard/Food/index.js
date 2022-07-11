import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import {
	Page,
	Column,
	Headings,
	Heading,
	Row,
	Cell,
	Delete,
	Btn,
	Form,
	Input,
} from './Elements';

const Food = () => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState(0);
	const [unit, setUnit] = useState('');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);

	const [foodList, setFoodList] = useState([]);

	const addFood = () => {
		Axios.post('http://localhost:3001/create', {
			name: name,
			amount: amount,
			unit: unit,
			fat: fat,
			carb: carb,
			protein: protein,
		}).then(() => {
			setFoodList([
				...foodList,
				{
					name: name,
					amount: amount,
					unit: unit,
					fat: fat,
					carb: carb,
					protein: protein,
				},
			]);
		});
	};

	const getFood = () => {
		Axios.get('http://localhost:3001/food').then((response) => {
			setFoodList(response.data);
		});
	};

	const deleteFood = (id) => {
		Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
			setFoodList(
				foodList.filter((food) => {
					return food.id !== id;
				})
			);
		});
	};

	return (
		<>
			<Page>
				<Column>
					<Headings>
						<Heading style={{ width: '25%' }}>Name</Heading>
						<Heading style={{ width: '20%' }}>Amount</Heading>
						<Heading style={{ width: '15%' }}>Fat</Heading>
						<Heading style={{ width: '15%' }}>Carb</Heading>
						<Heading style={{ width: '15%' }}>Protein</Heading>
					</Headings>
					{foodList.map((food, index) => {
						return (
							<Row key={index}>
								<Cell style={{ width: '25%' }}>{food.name}</Cell>
								<Cell style={{ width: '20%' }}>
									{food.amount} {food.unit}
								</Cell>
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
				<Btn onClick={getFood}>Update</Btn>
				<Form>
					<Input
						type="text"
						placeholder="Name"
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
					<Input
						type="number"
						placeholder="Amount"
						onChange={(event) => {
							setAmount(event.target.value);
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
					<Input type="submit" value="Submit" onClick={addFood}></Input>
				</Form>
			</Page>
		</>
	);
};

export default Food;
