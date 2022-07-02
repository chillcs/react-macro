import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<>
			<Section>
				<Title>Macro</Title>
				<Profile>O</Profile>
			</Section>
		</>
	);
};

export default Header;

/* Styles --- */

export const Section = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
`;

export const Title = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Profile = styled.div`
	position: absolute;
	top: 50%;
	right: 0%;
	transform: translate(-50%, -50%);
	padding: 25px 25px;
	background: red;
`;
