import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const TabList = styled.div`
	display: flex;
	width: 100%;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px;
	background: var(--light);
`;

export const Graph = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const GraphItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	width: 100px;
`;

export const Bar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	min-height: 10px;
	margin-bottom: 10px;
	background: var(--light);
`;

export const Title = styled.div`
	padding: 0 5px;
`;

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

export const Gap = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-left: 10px;
	text-align: left;
	font-size: var(--p);
`;

export const Log = styled.div`
	display: flex;
	width: 100%;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	padding-left: 5px;
	font-size: var(--xs);
`;

export const Remove = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Top = styled.div`
	display: flex;
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid var(--medium);
	&:last-of-type {
		border-bottom: none;
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid var(--medium);
	&:last-of-type {
		border-bottom: none;
	}
`;

export const BtnSm = styled.div`
	display: flex;
	justify-content: center;
	min-width: 20px;
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
	padding: 10px 0 10px 10px;
	background: var(--light);
`;

export const Input = styled.input`
	width: 50%;
	padding: 5px 5px;
	margin-left: 10px;
	font-size: var(--xs);
`;

export const Submit = styled.input`
	width: 50%;
	padding: 5px 5px;
	margin-left: 10px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;
