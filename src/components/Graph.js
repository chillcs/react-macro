import React from 'react';
import styled from 'styled-components';
import foods from '../data/Foods.json';

const FAT_SUM = [...foods.map((food) => food.fat)].reduce(
	(prev, current) => prev + current
);

const CARB_SUM = [...foods.map((food) => food.carb)].reduce(
	(prev, current) => prev + current
);

const PROTEIN_SUM = [...foods.map((food) => food.protein)].reduce(
	(prev, current) => prev + current
);

const Graph = () => {
	return (
		<>
			<Section>
				<Items>
					<Item>
						<Fat>{FAT_SUM}g</Fat>
						<Title>Fat</Title>
					</Item>
					<Item>
						<Carb>{CARB_SUM}g</Carb>
						<Title>Carb</Title>
					</Item>
					<Item>
						<Protein>{PROTEIN_SUM}g</Protein>
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

export const Fat = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: ${FAT_SUM * 2}px;
	min-height: 10px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Carb = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: ${CARB_SUM * 2}px;
	min-height: 10px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Protein = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: ${PROTEIN_SUM * 2}px;
	min-height: 10px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Title = styled.div`
	padding: 0 5px;
`;
