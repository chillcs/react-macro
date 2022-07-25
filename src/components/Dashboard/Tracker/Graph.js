import React from 'react';
import { useState, useEffect } from 'react';
import { Section, Items, Item, Bar, Title } from './Elements';

const Graph = (props) => {
	//State ---
	const [logData, setLogData] = useState([]);
	const [fats, setFats] = useState([]);
	const [carbs, setCarbs] = useState([]);
	const [proteins, setProteins] = useState([]);

	// Get and update log data ---
	useEffect(() => {
		fetch('http://localhost:3001/logdata')
			.then((res) => res.json())
			.then((data) => {
				setLogData(data);
			});
	}, [props.data]);

	// Calculate macros and update when log data changes ---
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

	// Render ---
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
