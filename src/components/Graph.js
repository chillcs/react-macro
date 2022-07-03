import React from 'react';
import styled from 'styled-components';
import foods from '../data/Foods.json';

const fatArr = [...foods.map((food) => food.fat)];
const fatSum = fatArr.reduce((prev, current) => prev + current);

const carbArr = [...foods.map((food) => food.carb)];
const carbSum = carbArr.reduce((prev, current) => prev + current);

const proteinArr = [...foods.map((food) => food.protein)];
const proteinSum = proteinArr.reduce((prev, current) => prev + current);

const Graph = () => {
	return (
		<>
			<Section>
				<Items>
					<Item>
						<Fat>{fatSum}g</Fat>
						<Title>Fats</Title>
					</Item>
					<Item>
						<Carb>{carbSum}g</Carb>
						<Title>Carbs</Title>
					</Item>
					<Item>
						<Protein>{proteinSum}g</Protein>
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
	height: ${fatSum * 2}px;
	min-height: 10px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Carb = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: ${carbSum * 2}px;
	min-height: 10px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Protein = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: ${proteinSum * 2}px;
	min-height: 10px;
	margin-bottom: 15px;
	background: var(--light);
`;

export const Title = styled.div`
	padding: 0 5px;
`;
