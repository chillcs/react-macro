import React from 'react';
import styled from 'styled-components';

const Settings = ({ active }) => {
	return (
		<>
			<Page active={active}>Some text</Page>
		</>
	);
};

export default Settings;

/* Styles --- */

export const Page = styled.div`
	display: ${({ active }) => (active ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	width: 100%;
	height: calc(100vh - 80px - 50px);
	padding: 15px;
	overflow: auto;
`;
