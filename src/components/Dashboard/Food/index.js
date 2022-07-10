import React from 'react';
import { Page, Column, Headings, Heading, Row, Cell, Btn } from './Elements';
import FOOD_DATA from '../../Data.json';

const Food = () => {
	return (
		<>
			<Page>
				<Column>
					<Headings>
						<Heading>Name</Heading>
						<Heading>Amount</Heading>
						<Heading>Unit</Heading>
						<Heading>Fat (g)</Heading>
						<Heading>Carb (g)</Heading>
						<Heading>Protein (g)</Heading>
					</Headings>
					{FOOD_DATA.map((food) => {
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
				</Column>
				<Btn>Create a new food</Btn>
				<form>
					<input type="text" />
					<input type="submit" value="Submit"></input>
				</form>
			</Page>
		</>
	);
};

export default Food;
