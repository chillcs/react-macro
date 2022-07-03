import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Graph from '../components/Graph';
import Data from '../components/Data';
import Add from '../components/Add';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Page>
				<Header />
				<Tabs />
				<Graph />
				<Data />
				<Add />
				<Footer />
			</Page>
		</>
	);
};

export default Home;

/* Styles --- */

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	width: 100%;
	min-height: 100vh;
	padding: 15px;
	background: var(--medium);
`;
