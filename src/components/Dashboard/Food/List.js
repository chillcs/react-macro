import React from 'react';
import { useState, useEffect } from 'react';
import { Library, Table, Row, Cell, Title, ButtonSm } from '../../Elements';

const List = (props) => {
	const [foodData, setFoodData] = useState([]);

	useEffect(() => {
		fetch('https://heroku-react-macro.herokuapp.com/fooddata')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, [props.data]);

	const deleteFood = (id) => {
		fetch(`https://heroku-react-macro.herokuapp.com/deletefood/${id}`, {
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
			<Library>
				<Title>FOOD LIBRARY</Title>
				<Table>
					{foodData.map((food, index) => {
						return (
							<Row key={index}>
								<Cell style={{ width: '35%' }}>{food.name}</Cell>
								<Cell style={{ width: '15%' }}>{food.unit}</Cell>
								<Cell style={{ width: '15%' }}>F: {food.fat} g</Cell>
								<Cell style={{ width: '15%' }}>C: {food.carb} g</Cell>
								<Cell style={{ width: '15%' }}>P: {food.protein} g</Cell>
								<ButtonSm
									onClick={() => {
										deleteFood(food.id);
									}}
								>
									{' '}
									☓
								</ButtonSm>
							</Row>
						);
					})}
				</Table>
			</Library>
		</>
	);
};

export default List;
