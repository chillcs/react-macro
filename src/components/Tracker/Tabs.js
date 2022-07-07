import React from 'react';
import styled from 'styled-components';

const Tabs = () => {
	return (
		<>
			<Section>
				<TabList>
					<Tab>Today</Tab>
					<Tab>Week</Tab>
					<Tab>Month</Tab>
					<Tab>Year</Tab>
				</TabList>
			</Section>
		</>
	);
};

export default Tabs;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const TabList = styled.div`
	display: flex;
	width: 100%;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 15px;
	background: var(--light);
`;
