import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
				<Heading>Food Log</Heading>
				{logData.length > 0 ? (
					<Column>
						{logData.map((log, index) => {
							return (
								<LogItem
									key={index}
									style={
										index % 2 === 0
											? { background: 'var(--alternate)' }
											: { background: 'var(--light)' }
									}
								>
									<Cell style={{ width: '5%' }}>{log.quantity}</Cell>
									<Cell style={{ width: '15%' }}>{log.unit}</Cell>
									<Cell style={{ width: '35%' }}>{log.name}</Cell>
									<Cell style={{ width: '15%' }}>F: {log.fat} g</Cell>
									<Cell style={{ width: '15%' }}>C: {log.carb} g</Cell>
									<Cell style={{ width: '15%' }}>P: {log.protein} g</Cell>
									<Btn
										onClick={() => {
											deleteLog(log.id);
										}}
									>
										☓
									</Btn>
								</LogItem>
							);
						})}
					</Column>
				) : (
					<LogItem>Nothing logged yet</LogItem>
				)}
			</Section>
		</>
	);
};
export default Log;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(50% - 50px - 20px);
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow-y: auto;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 10px;
	font-size: var(--p);
`;

export const LogItem = styled.div`
	display: flex;
	width: 100%;
	padding: 5px 10px;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	font-size: var(--xs);
`;

export const Btn = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;
