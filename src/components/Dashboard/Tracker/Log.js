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
								<Btn
									onClick={() => {
										deleteLog(log.id);
									}}
								>
									X
								</Btn>
							</LogItem>
						);
					})}
				</Column>
			</Section>
		</>
	);
};
export default Log;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 10px;
	padding-bottom: 5px;
	background: var(--light);
`;

export const Headings = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	font-size: var(--p);
`;

export const Gap = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-left: 10px;
	text-align: left;
	font-size: var(--p);
`;

export const LogItem = styled.div`
	display: flex;
	width: 100%;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	padding-left: 5px;
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
