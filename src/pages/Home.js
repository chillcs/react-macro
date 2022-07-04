import React from 'react';
import styled from 'styled-components';
import SelectFood from '../components/SelectFood';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Graph from '../components/Graph';
import Data from '../components/Data';
import Footer from '../components/Footer';

const Home = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<SelectFood isOpen={isOpen} toggle={toggle} />
			<Page>
				<Header />
				<Tabs />
				<Graph />
				<Data toggle={toggle} />
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
