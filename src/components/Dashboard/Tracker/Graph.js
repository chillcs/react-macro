import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Graph = (props) => {
	const [fatGoal, setFatGoal] = useState(0);
	const [carbGoal, setCarbGoal] = useState(0);
	const [proteinGoal, setProteinGoal] = useState(0);
	const [logData, setLogData] = useState([]);
	const [fats, setFats] = useState([]);
	const [carbs, setCarbs] = useState([]);
	const [proteins, setProteins] = useState([]);

	useEffect(() => {
		const fatGoal = JSON.parse(localStorage.getItem('fatGoal'));
		if (fatGoal) {
			setFatGoal(fatGoal);
		}
		const carbGoal = JSON.parse(localStorage.getItem('carbGoal'));
		if (carbGoal) {
			setCarbGoal(carbGoal);
		}
		const proteinGoal = JSON.parse(localStorage.getItem('proteinGoal'));
		if (proteinGoal) {
			setProteinGoal(proteinGoal);
		}
	}, [props.data]);

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

	const targetFats = parseInt(fatGoal);
	const targetCarbs = parseInt(carbGoal);
	const targetProteins = parseInt(proteinGoal);
	const targetTotal = targetFats + targetCarbs + targetProteins;
	const targetFatsAdj = (targetFats / targetTotal) * 100;
	const targetCarbsAdj = (targetCarbs / targetTotal) * 100;
	const targetProteinsAdj = (targetProteins / targetTotal) * 100;
	const fatsAdj = (fats / targetFats) * 100;
	const carbsAdj = (carbs / targetCarbs) * 100;
	const proteinsAdj = (proteins / targetProteins) * 100;
	const targetCalories = targetFats * 9 + targetCarbs * 4 + targetProteins * 4;
	const calories = fats * 9 + carbs * 4 + proteins * 4;
	const widthAdj = (calories / targetCalories) * 100;

	return (
		<>
			<Section>
				<Macros>
					<Macro>
						<TargetBar
							style={{ height: `${targetFatsAdj.toFixed(2).toString() + '%'}` }}
						>
							<Title>FAT</Title>
							<Bar
								style={{ height: `${fatsAdj.toFixed(2).toString() + '%'}` }}
							></Bar>
						</TargetBar>
						<Amount>
							{fats} / {targetFats} g
						</Amount>
					</Macro>
					<Macro>
						<TargetBar
							style={{
								height: `${targetCarbsAdj.toFixed(2).toString() + '%'}`,
							}}
						>
							<Title>CARB</Title>
							<Bar
								style={{ height: `${carbsAdj.toFixed(2).toString() + '%'}` }}
							></Bar>
						</TargetBar>
						<Amount>
							{carbs} / {targetCarbs} g
						</Amount>
					</Macro>
					<Macro>
						<TargetBar
							style={{
								height: `${targetProteinsAdj.toFixed(2).toString() + '%'}`,
							}}
						>
							<Title>PROTEIN</Title>
							<Bar
								style={{ height: `${proteinsAdj.toFixed(2).toString() + '%'}` }}
							></Bar>
						</TargetBar>
						<Amount>
							{proteins} / {targetProteins} g
						</Amount>
					</Macro>
				</Macros>
				<Calories>
					<TargetCalories>
						<Title>CALORIES</Title>
						<Logged
							style={{ width: `${widthAdj.toFixed(2).toString() + '%'}` }}
						></Logged>
					</TargetCalories>
					<Amount>
						{calories} / {targetCalories} cals
					</Amount>
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

export const Macros = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin-bottom: 5px;
`;

export const Macro = styled.div`
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
	width: 75px;
	min-height: 5px;
	margin-bottom: 10px;
	background: var(--light);
`;

export const Bar = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75px;
	background: var(--alternate);
`;

export const Title = styled.div`
	position: absolute;
	width: 100%;
	text-align: center;
	color: var(--medium);
	z-index: 10;
`;

export const Amount = styled.div`
	display: flex;
`;

export const Calories = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 10px;
`;

export const TargetCalories = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 25px;
	margin-bottom: 10px;
	background: var(--light);
`;

export const Logged = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: 25px;
	background: var(--alternate);
`;
