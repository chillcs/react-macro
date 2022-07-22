import React from 'react';
import { Page } from '../../Reusable';
import Graph from '../Tracker/Graph';
import FoodLog from '../Tracker/FoodLog';
import { Section, TabList, Tab } from './Elements';

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
				<Graph />
				<FoodLog />
			</Page>
		</>
	);
};
export default Tracker;
