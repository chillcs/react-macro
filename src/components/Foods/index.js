import React from 'react';
import styled from 'styled-components';
import FoodList from '../Foods/FoodList';

const Foods = () => {
	return (
		<>
			<Page>
				<FoodList />
			</Page>
		</>
	);
};

export default Foods;

/* Styles --- */

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	width: 100%;
	min-height: 100%;
	padding: 15px;
	background: var(--medium);
`;
