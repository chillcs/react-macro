import React from 'react';
import { useState, useEffect } from 'react';
import { Section, Items, Item, Bar, Title } from './Elements';

const Graph = () => {
	const [logData, setLogData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/foodlog')
			.then((res) => res.json())
			.then((data) => {
				setLogData(data);
			});
	}, []);

	const [fats, setFats] = useState([]);
	const [carbs, setCarbs] = useState([]);
	const [proteins, setProteins] = useState([]);
	useEffect(() => {
		setFats(
			[...logData.map((log) => log.quantity * log.fat)].reduce(function(a, b) {
				return a + b;
			}, 0)
		);
		setCarbs(
			[...logData.map((log) => log.quantity * log.carb)].reduce(function(a, b) {
				return a + b;
			}, 0)
		);
		setProteins(
			[...logData.map((log) => log.quantity * log.protein)].reduce(function(
				a,
				b
			) {
				return a + b;
			},
			0)
		);
	}, [logData]);

	return (
		<>
			<Section>
				<Items>
					<Item>
						<Bar style={{ height: `${fats}px` }}>{fats}g</Bar>
						<Title>Fat</Title>
					</Item>
					<Item>
						<Bar style={{ height: `${carbs}px` }}>{carbs}g</Bar>
						<Title>Carb</Title>
					</Item>
					<Item>
						<Bar style={{ height: `${proteins}px` }}>{proteins}g</Bar>
						<Title>Protein</Title>
					</Item>
				</Items>
			</Section>
		</>
	);
};
export default Graph;
