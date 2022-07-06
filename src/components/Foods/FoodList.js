import React from 'react';
import styled from 'styled-components';
import FOODS_DATA from '../../data/Foods.json';

const FoodList = () => {
	return (
		<>
			<Section>
				<Column>
					<Headings>
						<Heading>Name</Heading>
						<Heading>Amount</Heading>
						<Heading>Unit</Heading>
						<Heading>Fat (g)</Heading>
						<Heading>Carb (g)</Heading>
						<Heading>Protein (g)</Heading>
					</Headings>
					{FOODS_DATA.map((food) => {
						return (
							<Row key={food.id}>
								<Cell>{food.name}</Cell>
								<Cell>{food.amount}</Cell>
								<Cell>{food.unit}</Cell>
								<Cell>{food.fat}</Cell>
								<Cell>{food.carb}</Cell>
								<Cell>{food.protein}</Cell>
							</Row>
						);
					})}
					<FormGroup>
						<Input type="text" placeholder="Name" />
						<Input type="text" placeholder="Amount" />
						<Input type="text" placeholder="Unit" />
						<Input type="text" placeholder="Fat" />
						<Input type="text" placeholder="Carb" />
						<Input type="text" placeholder="Protein" />
					</FormGroup>
				</Column>
			</Section>
		</>
	);
};

export default FoodList;

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

export const FormGroup = styled.div`
	display: flex;
	width: 100%;
	margin: 5px 0;
`;

export const Input = styled.input`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	margin: 0 5px;
	padding: 2px 15px;
`;
