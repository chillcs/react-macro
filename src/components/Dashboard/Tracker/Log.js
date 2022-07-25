import React from 'react';
import { useState, useEffect } from 'react';
import {
	Section,
	Column,
	LogItem,
	Cell,
	Remove,
	Headings,
	Heading,
	Gap,
} from './Elements';

const Log = (props) => {
	const [logData, setLogData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/logdata')
			.then((res) => res.json())
			.then((data) => {
				setLogData(data);
			});
	}, [props.data]);

	const deleteLog = (id) => {
		fetch(`http://localhost:3001/deletelog/${id}`, {
			method: 'DELETE',
		}).then(() => {
			setLogData(
				logData.filter((log) => {
					return log.id !== id;
				})
			);
		});
		props.updateData();
	};

	return (
		<>
			<Section>
				<Column>
					<Headings>
						<Heading style={{ width: '20%' }}>Amount</Heading>
						<Heading style={{ width: '35%' }}>Food</Heading>
						<Heading style={{ width: '15%' }}>Fat</Heading>
						<Heading style={{ width: '15%' }}>Carb</Heading>
						<Heading style={{ width: '15%' }}>Protein</Heading>
						<Gap style={{ width: '10px' }}></Gap>
					</Headings>
					{logData.map((log, index) => {
						return (
							<LogItem key={index}>
								<Cell style={{ width: '5%' }}>{log.quantity}</Cell>
								<Cell style={{ width: '15%' }}>{log.unit}</Cell>
								<Cell style={{ width: '35%' }}>{log.name}</Cell>
								<Cell style={{ width: '15%' }}>{log.fat} g</Cell>
								<Cell style={{ width: '15%' }}>{log.carb} g</Cell>
								<Cell style={{ width: '15%' }}>{log.protein} g</Cell>
								<Remove
									onClick={() => {
										deleteLog(log.id);
									}}
								>
									X
								</Remove>
							</LogItem>
						);
					})}
				</Column>
			</Section>
		</>
	);
};
export default Log;
