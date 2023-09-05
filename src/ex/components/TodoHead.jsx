import React from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	border: 1px solid ${(props) => props.bgc};
	background-color: ${(props) => props.bgc};
	border-radius: 10px 10px 0 0;
`;
const Title = styled.h1`
	height: 150px;
	font-size: 30px;
	line-height: 150px;
`;

const DateTime = styled.dateTime`
	font-size: 16px;
	text-align: right;
`;

const Time = styled.time`
	display: block;
`;

const Day = styled.span`
	display: block;
	margin-top: 8px;
`;

const TodoHead = ({ Children }) => {
	return (
		<div>
			<Header bgc={`#303474`}>
				<Title>{Children}</Title>
				<DateTime>
					<Time>2023년 8월 29일</Time>
					<Day>월요일</Day>
				</DateTime>
			</Header>
		</div>
	);
};

export default TodoHead;
