import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Section, Items, Item, Bar, Title } from './Elements';

const Graph = () => {
	const [fats, setFats] = useState([]);
	useEffect(() => {
		const getFats = () => {
			Axios.get('http://localhost:3001/fatsum').then((response) => {
				setFats(response.data);
			});
		};
		getFats();
	}, []);

	const [carbs, setCarbs] = useState([]);
	useEffect(() => {
		const getCarbs = () => {
			Axios.get('http://localhost:3001/carbsum').then((response) => {
				setCarbs(response.data);
			});
		};
		getCarbs();
	}, []);

	const [proteins, setProteins] = useState([]);
	useEffect(() => {
		const getProteins = () => {
			Axios.get('http://localhost:3001/proteinsum').then((response) => {
				setProteins(response.data);
			});
		};
		getProteins();
	}, []);

	return (
		<>
			<Section>
				<Items>
					{fats.map((fat, index) => {
						const FAT_SUM = Object.values(fat)[0];
						return (
							<Item key={index}>
								<Bar style={{ height: `${FAT_SUM}px` }}>{FAT_SUM}g</Bar>
								<Title>Fat</Title>
							</Item>
						);
					})}
					{carbs.map((carb, index) => {
						const CARB_SUM = Object.values(carb)[0];
						return (
							<Item key={index}>
								<Bar style={{ height: `${CARB_SUM}px` }}>{CARB_SUM}g</Bar>
								<Title>Carb</Title>
							</Item>
						);
					})}
					{proteins.map((protein, index) => {
						const PROTEIN_SUM = Object.values(protein)[0];
						return (
							<Item key={index}>
								<Bar style={{ height: `${PROTEIN_SUM}px` }}>{PROTEIN_SUM}g</Bar>
								<Title>Protein</Title>
							</Item>
						);
					})}
				</Items>
			</Section>
		</>
	);
};
export default Graph;
