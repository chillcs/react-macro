import React from 'react';
import styled from 'styled-components';
import foods from '../data/Foods.json';

const Data = () => {
	return (
		<>
			<Section>
				<Column>
					<Headings>
						<Heading>Name</Heading>
						<Heading>Amount</Heading>
						<Heading>Fat</Heading>
						<Heading>Carb</Heading>
						<Heading>Protein</Heading>
					</Headings>
					{foods.map((food) => {
						return (
							<Row key={food.id}>
								<Cell>{food.name}</Cell>
								<Cell>
									{food.amount}
									{food.unit}
								</Cell>
								<Cell>{food.fat}g</Cell>
								<Cell>{food.carb}g</Cell>
								<Cell>{food.protein}g</Cell>
							</Row>
						);
					})}
				</Column>
			</Section>
		</>
	);
};

export default Data;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	background: var(--light);
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px;
`;

export const Headings = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 15px;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	padding: 0 15px;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	padding: 2px 15px;
	padding-left: 20px;
`;
