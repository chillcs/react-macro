import styled from 'styled-components';

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 10px;
	padding-bottom: 5px;
	background: var(--light);
`;

export const Headings = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	font-size: var(--p);
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid var(--medium);
	&:last-of-type {
		border-bottom: none;
	}
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	padding-left: 5px;
	font-size: var(--xs);
`;

export const Delete = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;

export const Btn = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	width: 100%;
	padding: 10px;
	background: var(--light);
	font-size: var(--p);
	&:hover {
		cursor: pointer;
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 100%;
	padding: 5px 5px;
	margin: 5px 0;
	font-size: var(--p);
`;

export const Submit = styled.input`
	width: 100%;
	padding: 5px 5px;
	margin: 5px 0;
	font-size: var(--p);
	&:hover {
		cursor: pointer;
	}
`;
