import React from 'react';
import styled from 'styled-components';

const Footer = ({ openTab }) => {
	return (
		<>
			<Section>
				<Button id={0} onClick={openTab}>
					Track
				</Button>
				<Button id={1} onClick={openTab}>
					Foods
				</Button>
				<Button id={2} onClick={openTab}>
					Settings
				</Button>
			</Section>
		</>
	);
};

export default Footer;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	background: var(--dark);
`;

export const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 15px;
	color: var(--light);
`;
