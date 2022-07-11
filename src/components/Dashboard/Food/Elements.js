import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: 100%;
	height: calc(100vh - 80px - 50px);
	padding: 15px;
	overflow: auto;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
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
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: left;
	padding-left: 5px;
`;

export const Delete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 5%;
	padding: 3px 8px;
	background: var(--medium);
`;

export const Btn = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	width: 100%;
	padding: 15px;
	background: var(--light);
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 100%;
	padding: 5px 5px;
	margin: 5px 0;
`;
