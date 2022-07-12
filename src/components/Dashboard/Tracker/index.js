import React from 'react';
import { Page } from '../../Reusable';
import {
	Section,
	TabList,
	Tab,
	Graph,
	GraphItem,
	Bar,
	Title,
	Column,
	Headings,
	Heading,
	Row,
	Cell,
	Button,
} from './Elements';
import FOOD_DATA from '../../Data.json';

const FAT_SUM = [...FOOD_DATA.map((food) => food.fat)].reduce(
	(prev, current) => prev + current
);

const CARB_SUM = [...FOOD_DATA.map((food) => food.carb)].reduce(
	(prev, current) => prev + current
);

const PROTEIN_SUM = [...FOOD_DATA.map((food) => food.protein)].reduce(
	(prev, current) => prev + current
);

const Tracker = () => {
	return (
		<>
			<Page>
				<Section>
					<TabList>
						<Tab>Today</Tab>
						<Tab>Week</Tab>
						<Tab>Month</Tab>
						<Tab>Year</Tab>
					</TabList>
				</Section>
				<Section>
					<Graph>
						<GraphItem>
							<Bar style={{ height: `${FAT_SUM * 2}px` }}>{FAT_SUM}g</Bar>
							<Title>Fat</Title>
						</GraphItem>
						<GraphItem>
							<Bar style={{ height: `${CARB_SUM * 2}px` }}>{CARB_SUM}g</Bar>
							<Title>Carb</Title>
						</GraphItem>
						<GraphItem>
							<Bar style={{ height: `${PROTEIN_SUM * 2}px` }}>
								{PROTEIN_SUM}g
							</Bar>
							<Title>Protein</Title>
						</GraphItem>
					</Graph>
				</Section>
				<Section>
					<Column>
						<Headings>
							<Heading>Name</Heading>
							<Heading>Amount</Heading>
							<Heading>Fat</Heading>
							<Heading>Carb</Heading>
							<Heading>Protein</Heading>
						</Headings>
						{FOOD_DATA.map((food) => {
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
				<Button>Add</Button>
			</Page>
		</>
	);
};
export default Tracker;
