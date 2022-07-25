import React from 'react';
import { useState, useEffect } from 'react';
import { Column, Headings, Heading, Row, Cell, Delete } from './Elements';

const List = (props) => {
	// State ---
	const [foodData, setFoodData] = useState([]);

	//Get food data ---
	useEffect(() => {
		fetch('http://localhost:3001/fooddata')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, [props.data]);

	// Delete food ---
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

	// Render ---
	return (
		<>
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
		</>
	);
};

export default List;
