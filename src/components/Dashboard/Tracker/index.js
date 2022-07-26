import React from 'react';
import { useState } from 'react';
import Graph from '../Tracker/Graph';
import Log from '../Tracker/Log';
import Add from '../Tracker/Add';
import { Page } from '../../Elements';

const Tracker = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};
	return (
		<>
			<Page>
				<Graph data={data} />
				<Log data={data} updateData={updateData} />
				<Add updateData={updateData} />
			</Page>
		</>
	);
};
export default Tracker;
