import React from 'react';
import { useState } from 'react';
import { Page } from '../../Reusable';
import Graph from '../Tracker/Graph';
import Log from '../Tracker/Log';
import Add from '../Tracker/Add';
import { Section, TabList, Tab } from './Elements';

const Tracker = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};
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
				<Graph data={data} />
				<Log data={data} updateData={updateData} />
				<Add updateData={updateData} />
			</Page>
		</>
	);
};
export default Tracker;
