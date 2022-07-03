import React from 'react';
import styled from 'styled-components';

const Add = () => {
	return (
		<>
			<Section>
				<Btn>Add</Btn>
			</Section>
		</>
	);
};

export default Add;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Btn = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 15px;
	background: var(--light);
`;
