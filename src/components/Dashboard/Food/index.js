import React from 'react';
import { useState } from 'react';
import { Page } from '../../Elements';
import List from '../Food/List';
import Create from './Create';

const Food = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};

	return (
		<>
			<Page>
				<List data={data} />
				<Create updateData={updateData} />
			</Page>
		</>
	);
};

export default Food;
