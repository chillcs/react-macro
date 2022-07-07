import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	width: 100%;
	min-height: 100%;
	padding: 15px;
	background: var(--medium);
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px;
	background: var(--light);
`;

export const Headings = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 15px;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	padding: 0 15px;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	padding: 2px 15px;
	padding-left: 20px;
`;

export const FormGroup = styled.div`
	display: flex;
	width: 100%;
	margin: 5px 0;
`;

export const Input = styled.input`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	margin: 0 5px;
	padding: 2px 15px;
`;
