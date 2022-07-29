import React from 'react';
import { useState } from 'react';
import Goal from '../Tracker/Goal';
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
				<Goal updateData={updateData} />
				<Graph data={data} />
				<Log data={data} updateData={updateData} />
				<Add updateData={updateData} />
			</Page>
		</>
	);
};
export default Tracker;
