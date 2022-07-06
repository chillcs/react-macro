import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Track from '../components/Track/index';
import Foods from '../components/Foods/index';
import Footer from '../components/Footer';

const Home = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<App>
				<FixHeader>
					<Header />
				</FixHeader>
				<Body>
					<Track />
					<Foods isOpen={isOpen} toggle={toggle} />
				</Body>
				<FixFooter>
					<Footer />
				</FixFooter>
			</App>
		</>
	);
};

export default Home;

/* Styles --- */

export const App = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	padding: 15px;
	background: var(--medium);
`;

export const FixHeader = styled.div`
	position: fixed;
	top: 0%;
	left: 0%;
	width: 100%;
`;

export const Body = styled.div`
	position: absolute;
	top: 80px;
	left: 0%;
	width: 100%;
`;

export const FixFooter = styled.div`
	position: fixed;
	bottom: 0%;
	left: 0%;
	width: 100%;
`;
