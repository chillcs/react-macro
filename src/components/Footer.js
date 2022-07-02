import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<>
			<Section>
				<Item>Graph</Item>
				<Item>Foods</Item>
				<Item>Settings</Item>
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
	height: 100px;
	padding: 25px;
`;

export const Item = styled.div`
	background: red;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
