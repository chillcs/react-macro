import React from 'react';
import styled from 'styled-components';
import foods from '../data/Foods.json';

const SelectFood = ({ isOpen, toggle }) => {
	return (
		<>
			<Section isOpen={isOpen}>
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
				<Btn onClick={toggle}>Return</Btn>
			</Section>
		</>
	);
};

export default SelectFood;

/* Styles --- */

export const Section = styled.aside`
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10%;
	background: var(--medium);
	transition: 0.3s ease-in-out;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px;
	background: var(--light);
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

export const Btn = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 15px;
	background: var(--light);
`;
