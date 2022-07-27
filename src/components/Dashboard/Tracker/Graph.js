import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Graph = (props) => {
	const [logData, setLogData] = useState([]);
	const [fats, setFats] = useState([]);
	const [carbs, setCarbs] = useState([]);
	const [proteins, setProteins] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/logdata')
			.then((res) => res.json())
			.then((data) => {
				setLogData(data);
			});
	}, [props.data]);

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

	const targetFats = 100;
	const targetCarbs = 200;
	const targetProteins = 150;
	const targetCalories = targetFats * 9 + targetCarbs * 4 + targetProteins * 4;
	console.log(targetCalories);
	const calories = fats * 9 + carbs * 4 + proteins * 4;
	const width = ((calories / targetCalories) * 100).toString() + '%';

	return (
		<>
			<Section>
				<Items>
					<Item>
						<TargetBar style={{ height: `${targetFats}px` }}>
							<Bar style={{ height: `${fats}px` }}>{fats}g</Bar>
						</TargetBar>
						<Title>Fat</Title>
					</Item>
					<Item>
						<TargetBar style={{ height: `${targetCarbs}px` }}>
							<Bar style={{ height: `${carbs}px` }}>{carbs}g</Bar>
						</TargetBar>
						<Title>Carb</Title>
					</Item>
					<Item>
						<TargetBar style={{ height: `${targetProteins}px` }}>
							<Bar style={{ height: `${proteins}px` }}>{proteins}g</Bar>
						</TargetBar>
						<Title>Protein</Title>
					</Item>
				</Items>
				<Calories>
					<TargetCalories>
						<LoggedCalories style={{ width: `${width}` }}></LoggedCalories>
					</TargetCalories>
					<Title>
						{calories} / {targetCalories} cals
					</Title>
				</Calories>
			</Section>
		</>
	);
};
export default Graph;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	height: 50%;
`;

export const Items = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	width: 100px;
`;

export const TargetBar = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	width: 50px;
	min-height: 10px;
	margin-bottom: 10px;
	background: var(--light);
`;

export const Bar = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	background: var(--dark);
`;

export const Title = styled.div`
	padding: 0 10px;
	margin-bottom: 10px;
`;

export const Calories = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TargetCalories = styled.div`
	position: relative;
	width: 100%;
	height: 25px;
	margin-bottom: 10px;
	background: var(--light);
`;

export const LoggedCalories = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: 25px;
	background: var(--dark);
`;
