import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Graph from '../components/Graph';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Page>
				<Header />
				<Graph />
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
	width: 100%;
	height: 100vh;
	background: var(--medium);
`;
