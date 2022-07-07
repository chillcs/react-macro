import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Graph from './Graph';
import Chart from './Chart';

const Track = (props) => {
	return (
		<>
			<Page id={0} active={props.active}>
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
	display: ${({ active }) => (active === 0 ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	width: 100%;
	height: calc(100vh - 80px - 50px);
	padding: 15px;
	overflow: auto;
`;
