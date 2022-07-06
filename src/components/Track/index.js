import React from 'react';
import styled from 'styled-components';
import Tabs from '../Track/Tabs';
import Graph from '../Track/Graph';
import Chart from '../Track/Chart';

const Track = () => {
	return (
		<>
			<Page>
				<Tabs />
				<Graph />
				<Chart />
			</Page>
		</>
	);
};

export default Track;

/* Styles --- */

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	width: 100%;
	height: calc(100vh - 80px - 50px);
	padding: 15px;
	overflow: auto;
`;
