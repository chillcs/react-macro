import React from 'react';
import styled from 'styled-components';

const Graph = () => {
	return (
		<>
			<Section>
				<Tabs>
					<Tab>Today</Tab>
					<Tab>Week</Tab>
					<Tab>Month</Tab>
					<Tab>Year</Tab>
				</Tabs>
				<Chart>
					<Item>
						<Bar>Xg</Bar>
						<Title>Fats</Title>
					</Item>
					<Item>
						<Bar>Xg</Bar>
						<Title>Carbs</Title>
					</Item>
					<Item>
						<Bar>Xg</Bar>
						<Title>Protein</Title>
					</Item>
				</Chart>
			</Section>
		</>
	);
};

export default Graph;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background: var(--medium);
`;

export const Tabs = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 15px;
	margin: 50px 0;
	background: var(--light);
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	width: 25%;
`;

export const Chart = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px 15px;
	background: var(--medium);
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	width: 75px;
	height: 200px;
`;

export const Bar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 100px;
	background: var(--light);
`;

export const Title = styled.div`
	padding: 10px 5px;
`;