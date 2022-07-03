import React from 'react';
import styled from 'styled-components';

const Graph = () => {
	return (
		<>
			<Section>
				<Items>
					<Item>
						<Bar>Xg</Bar>
						<Title>Fats</Title>
					</Item>
					<Item>
						<Bar>Xg</Bar>
						<Title>Carbs</Title>
					</Item>
					<Item>
						<Bar>Xg</Bar>
						<Title>Protein</Title>
					</Item>
				</Items>
			</Section>
		</>
	);
};

export default Graph;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const Items = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	width: 100px;
`;

export const Bar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 150px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Title = styled.div`
	padding: 0 5px;
`;
