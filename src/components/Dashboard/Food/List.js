import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const List = (props) => {
	const [foodData, setFoodData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/fooddata')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, [props.data]);

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

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 10px;
	padding-bottom: 5px;
	background: var(--light);
`;

export const Headings = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	font-size: var(--p);
`;

export const Row = styled.div`
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

export const Delete = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;
